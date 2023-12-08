import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WriterDashboardComponent } from './writer-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: WriterDashboardComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  
})
export class WriterDashboardRoutingModule { }
