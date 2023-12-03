import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {  
    path: "login",
    loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule),
  },
  {  
    path: "hunger",
    loadChildren: () => import('./hunger/hunger.module').then(mod => mod.HungerModule),
  },
  {
    path: "layout",
    loadChildren: () => import('./layout/layout.module').then(mod => mod.LayoutModule),
  },
 
  {
    path: "registration",
    loadChildren: () => import('./registration/registration.module').then(mod => mod.RegistrationModule),
  },

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
