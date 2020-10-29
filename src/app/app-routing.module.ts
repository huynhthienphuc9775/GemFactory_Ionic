import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
import { AuthLoginGuard } from './shared/guards/authLogin.guard';

import { } from '../app/admin/layouts/layouts.module'
const routes: Routes = [
  {
    path: '',
    loadChildren: '../app/auth/login/login.module#LoginModule',
    // canActivate: [AuthLoginGuard]

  },
  {
    path: 'admin/home',
    loadChildren: '../app/admin/dashboard/dashboard.module#DashboardModule',
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard]
  },
  {
    path: 'register',
    loadChildren: '../app/auth/register/register.module#RegisterModule',
    // canActivate: [AuthLoginGuard]

  },
  {
    path: 'admin/sales-status',
    loadChildren: '../app/admin/sales-status/sales-status.module#SalesStatusModule'
  },
  {
    path: 'admin/video-trend',
    loadChildren: '../app/admin/video-trend/video-trend.module#VideoTrendModule'
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
