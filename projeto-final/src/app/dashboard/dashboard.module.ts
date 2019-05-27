import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { DadosService } from './dados.service';
import { DashBoardRoutingComponent } from './dashboard-routing.component';
import { DashBoardRoutingModule } from './dashboard-rounting.module';

@NgModule({
  declarations: [
    DashboardComponent,
    DashBoardRoutingComponent
  ],
  imports: [
    CommonModule,
    DashBoardRoutingModule
  ],
  exports: [
    DashboardComponent
  ],
  providers: [
    DadosService
  ]
})
export class DashboardModule { }
