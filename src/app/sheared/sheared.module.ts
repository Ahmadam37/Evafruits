import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShearedRoutingModule } from './sheared-routing.module';
import { ShearedComponent } from './sheared.component';


@NgModule({
  declarations: [
    ShearedComponent
  ],
  imports: [
    CommonModule,
    ShearedRoutingModule
  ]
})
export class ShearedModule { }
