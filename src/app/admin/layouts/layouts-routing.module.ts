import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutsComponent } from './layouts.component';
const routes: Routes = [
    {
        path: '', component: LayoutsComponent, children: [
            { path: '', loadChildren: '../dashboard/dashboard.module#DashboardModule' },
            // { path: 'sales-status', loadChildren: '../sales-status/sales-status.module#SalesStatusModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutsRoutingModule { }
