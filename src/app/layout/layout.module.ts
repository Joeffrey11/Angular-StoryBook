import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddBookModalComponent } from '../components/add-book-modal/add-book-modal.component';
import { ScreenComponent } from '../components/screen/screen.component';
import { SidenavComponent } from '../components/sidenav/sidenav.component';
import { TopnavComponent } from '../components/topnav/topnav.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { ReaderDashboardComponent } from './reader-dashboard/reader-dashboard.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    LayoutComponent,
    TopnavComponent,
    SidenavComponent,
    ScreenComponent,
    ReaderDashboardComponent,
    ViewComponent,
    AddBookModalComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class LayoutModule {}
