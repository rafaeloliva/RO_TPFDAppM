import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogSensorPageRoutingModule } from './log-sensor-routing.module';

import { LogSensorPage } from './log-sensor.page';
import { FechaPipePipe } from '../pipes/fecha-pipe.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogSensorPageRoutingModule
  ],
  declarations: [LogSensorPage,FechaPipePipe]
})
export class LogSensorPageModule {}
