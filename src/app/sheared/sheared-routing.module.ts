import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShearedComponent } from './sheared.component';

const routes: Routes = [{ path: '', component: ShearedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShearedRoutingModule { }
