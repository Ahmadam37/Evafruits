import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShearedRoutingModule } from './sheared-routing.module';
import { ShearedComponent } from './sheared.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ShearedComponent
  ],
  imports: [
    CommonModule,
    ShearedRoutingModule
  ],
  exports: [NavbarComponent, FooterComponent],
})
export class ShearedModule { }
