import { Component } from '@angular/core';
import * as HighCharts from 'highcharts';

@Component({
  selector: 'app-scatter',
  templateUrl: 'scatter.page.html',
  styleUrls: ['scatter.page.scss'],
})
export class ScatterPage {
  constructor() { }

  ionViewDidEnter() {
    this.plotSimpleScatterChart();
  }

  plotSimpleScatterChart() {
    let myChart = 1;
  }
    

}
