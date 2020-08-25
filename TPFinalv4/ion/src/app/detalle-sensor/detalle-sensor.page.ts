//correr antes npm install --save highcharts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Medicion } from '../model/Medicion';
import { Riego } from '../model/Riego';
import { MedicionService } from '../services/medicion.service';


import * as Highcharts from 'highcharts';
import { RiegoService } from '../services/riego.service';
declare var require: any;
require('highcharts/highcharts-more')(Highcharts);
require('highcharts/modules/solid-gauge')(Highcharts);
let lecturaSensor:number=0;  //

@Component({
  selector: 'app-detalle-sensor',
  templateUrl: './detalle-sensor.page.html',
  styleUrls: ['./detalle-sensor.page.scss'],
})
export class DetalleSensorPage implements OnInit {

  private valorObtenido:number=30;
  
  public myChart;
  private chartOptions;
  public idDispositivo:String;
  public medicion:Medicion;
  public riego:Riego;
  public evToggle:String = 'Abrir';
  public evStatus:number = 0;

  constructor(private router:ActivatedRoute, private mServ:MedicionService, private rServ:RiegoService) { 

  }

  ngOnInit() {
    
    
  }

  async switchElectrovalvula(){
    //Calculo la fecha
    let current_datetime = new Date()
    let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds() 
    
    // Calculo valor aleatorio entre 0 y 100
    // Esto se hace en la generación del grafico Spline, y se guarda en variable global lecturaSensor
    this.valorObtenido = Math.round(lecturaSensor);
    console.log("EVls:"+lecturaSensor);console.log("EVvo:"+this.valorObtenido);


    if(this.evToggle == 'Abrir'){
      // Invierto estado del botón
      this.evToggle = 'Cerrar';

    }

    else{
      // Invierto estado del botón
      this.evToggle = 'Abrir';
      console.log("-EVls:"+lecturaSensor);
      console.log("-EVvo:"+this.valorObtenido);
      // Loggueo medición
      let a : Medicion= new Medicion(99,formatted_date,+this.valorObtenido,this.idDispositivo);
      
      await this.mServ.agregarMedicion(a);

      // Actualizo Chart
      this.myChart.update({series: [{
        name: 'kPA',
        data: [+this.valorObtenido],
        tooltip: {
            valueSuffix: ' kPA'
        }
      }]});
    }

    //Invierto estado de electroválvula
    if(this.evStatus)
      this.evStatus = 0;
    else
      this.evStatus = 1;

    // loggeo cambio en la tabla
    let r : Riego = new Riego(99,formatted_date,this.evStatus,this.riego.electrovalvulaId);

    this.rServ.agregarRiego(r);

  }

  async ionViewWillEnter() {
    //Para un determinado ID
    this.idDispositivo = this.router.snapshot.paramMap.get('id');
    // Busco la última medición
    this.medicion = await this.mServ.getMedicionByIdDispositivo(this.idDispositivo);
    // y el último log de riego
    this.riego = await this.rServ.getRiegoByIdDispositivo(this.idDispositivo);
  
    // Cargo el valor en una variable para mostrar
    this.valorObtenido = this.medicion.valor;

    // Veo estado de EV según último Log
    this.evStatus = this.riego.apertura;
    
    // Si está abierta, la acción del botoń es cerrar
    if(this.evStatus)
      this.evToggle = 'Cerrar';
    else
      this.evToggle = 'Abrir';


    // Genero Chart
    this.generarChart();
    
    this.myChart.update({series: [{
      name: 'kPA',
      data: [+this.valorObtenido],
      tooltip: {
          valueSuffix: ' kPA'
      }
    }]});



  }

  generarChart() {
    this.chartOptions={
      chart: {
          type: 'gauge',
          plotBackgroundColor: null,
          plotBackgroundImage: null,
          plotBorderWidth: 0,
          plotShadow: false
        }
        ,title: {
          text: 'Sensor N° ' + this.idDispositivo
        }

        ,credits:{enabled:false}
        
           
        ,pane: {
            startAngle: -150,
            endAngle: 150
        } 
        // the value axis
      ,yAxis: {
        min: 0,
        max: 100,
  
        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',
  
        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: 'kPA'
        },
        plotBands: [{
            from: 0,
            to: 10,
            color: '#55BF3B' // green
        }, {
            from: 10,
            to: 30,
            color: '#DDDF0D' // yellow
        }, {
            from: 30,
            to: 100,
            color: '#DF5353' // red
        }]
    }
    ,
  
    series: [{
        name: 'kPA',
        data: [+this.valorObtenido],
        tooltip: {
            valueSuffix: ' kPA'
        }
    }]

    };
    this.myChart = Highcharts.chart('highcharts', this.chartOptions );
  }
  
  // Agrego para mostrar valores aleatorios
  ionViewDidEnter() {
    this.plotDynamicSplineChart();
  }

  // Funcion de generacion y ploteo de valores aleatorios
  plotDynamicSplineChart() {
    let myChart2 = Highcharts.chart('dynamicSpline', {
      chart: {
        type: 'spline',
        animation: true, // don't animate in old IE
        marginRight: 10,
        events: {
          load: function () {

            // cambiamos a 2 segundos
            var series = this.series[0];
            setInterval(function () {
              var x = (new Date()).getTime(), // current time
                y = 100*Math.random();        // genera valor aleatorio 
                lecturaSensor = y;       // y lo deja disponible
                console.log(lecturaSensor);
              series.addPoint([x, y], true, true);
            }, 2000);
          }
        }
      },

      time: {
        useUTC: false
      },

      title: {
        text: 'Lecturas Sensor 0-100 kPa'
      },
      xAxis: {
        type: 'datetime',
        tickPixelInterval: 150
      },
      yAxis: {
        title: {
          text: 'Valor [kPa]'
        },
        plotLines: [{
          value: 0,
          width: 1,
          color: '#808080'
        }]
      },
      tooltip: {
        headerFormat: '<b>{series.name}</b><br/>',
        pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
      },
      legend: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      series: [{
        name: 'Lectura',
        type: undefined,
        data: (function () {
          // generate an array of random data
          var data = [],
            time = (new Date()).getTime(),
            i;

          for (i = -19; i <= 0; i += 1) {
            data.push({
              x: time + i * 1000,
              y: 100*Math.random()
            });
          }
          return data;
        }())
      }]

    });
  }
  // fin funcion ploteo agregada

}