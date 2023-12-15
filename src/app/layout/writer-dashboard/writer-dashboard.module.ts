import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { EditBookModalComponent } from 'src/app/components/edit-book-modal/edit-book-modal.component';
import { WriterDashboardRoutingModule } from './writer-dashboard-routing.module';
import { WriterDashboardComponent } from './writer-dashboard.component';

@NgModule({
  declarations: [WriterDashboardComponent, EditBookModalComponent],
  imports: [
    CommonModule,
    WriterDashboardRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class WriterDashboardModule {}
