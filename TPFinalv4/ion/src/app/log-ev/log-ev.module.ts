import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogEvPageRoutingModule } from './log-ev-routing.module';

import { LogEvPage } from './log-ev.page';
import { FechaPipePipe } from '../pipes/fecha-pipe.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogEvPageRoutingModule
  ],
  declarations: [LogEvPage,FechaPipePipe]
})
export class LogEvPageModule {}
