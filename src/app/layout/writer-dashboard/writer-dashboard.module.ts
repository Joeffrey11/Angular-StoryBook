import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WriterDashboardRoutingModule } from './writer-dashboard-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { WriterDashboardComponent } from './writer-dashboard.component';

@NgModule({
  declarations: [
    WriterDashboardComponent
  ],
  imports: [
    CommonModule,
    WriterDashboardRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class WriterDashboardModule { }
