import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { DashBoardRoutingComponent } from './dashboard-routing.component';

export const DashBoardRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashBoardRoutingComponent,
        children: [
            {
                path: '',
                component: DashboardComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(DashBoardRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class DashBoardRoutingModule {

}
