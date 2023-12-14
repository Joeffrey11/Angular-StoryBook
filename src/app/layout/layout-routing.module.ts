import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule, Routes } from '@angular/router';
import { ReaderDashboardComponent } from './reader-dashboard/reader-dashboard.component';
import { WriterDashboardComponent } from './writer-dashboard/writer-dashboard.component';
import { authGuard } from '../auth/auth.guard';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'prefix',
      },
      {
        path: 'admin',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then(
            (mod) => mod.DashboardModule
          ),
        canActivateChild: [authGuard],
      },
      {
        path: 'reader',
        component: ReaderDashboardComponent,
        canActivate: [authGuard],
      },
      {
        path: 'view',
        component: ViewComponent
      },
      {
        path: 'writer',
        component: WriterDashboardComponent,
        canActivate: [authGuard],
      },
      {
        path: 'user-management',
        loadChildren: () =>
          import('./user-management/user-management.module').then(
            (mod) => mod.UserManagementModule
          ),
        canActivateChild: [authGuard],
      },
      {
        path: 'product',
        loadChildren: () =>
          import('./product/product.module').then((mod) => mod.ProductModule),
        canActivateChild: [authGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
