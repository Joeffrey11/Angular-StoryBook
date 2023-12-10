import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule, Routes } from '@angular/router';
import { ReaderDashboardComponent } from './reader-dashboard/reader-dashboard.component';
import { WriterDashboardComponent } from './writer-dashboard/writer-dashboard.component';
import { authGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'admin',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then(
            (mod) => mod.DashboardModule
          ),
      },
      {
        path: 'reader',
        component: ReaderDashboardComponent,
      },
      {
        path: 'writer',
        component: WriterDashboardComponent,
      },
      {
        path: 'user-management',
        loadChildren: () =>
          import('./user-management/user-management.module').then(
            (mod) => mod.UserManagementModule
          ),
      },
      {
        path: 'product',
        loadChildren: () =>
          import('./product/product.module').then((mod) => mod.ProductModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
