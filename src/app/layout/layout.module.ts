import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { TopnavComponent } from '../components/topnav/topnav.component';
import { SidenavComponent } from '../components/sidenav/sidenav.component';
import { ScreenComponent } from '../components/screen/screen.component';
import { WriterDashboardComponent } from './writer-dashboard/writer-dashboard.component';
import { ReaderDashboardComponent } from './reader-dashboard/reader-dashboard.component';





@NgModule({
  declarations: [
    LayoutComponent,
    TopnavComponent,
    SidenavComponent,
    ScreenComponent,
    WriterDashboardComponent,
    ReaderDashboardComponent,
   
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
  
})
export class LayoutModule { }
