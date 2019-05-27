import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JogoDaVelhaComponent } from './jogo-da-velha.component';
import { JogoDaVelhaService } from './shared';

import { JogoDaVelhaRoutingModule } from './jogo-da-velha-rounting.module';
import { JogoDaVelhaRoutingComponent } from './jogo-da-velha-routing.component';

@NgModule({
  declarations: [
    JogoDaVelhaComponent,
    JogoDaVelhaRoutingComponent
  ],
  imports: [
    CommonModule,
    JogoDaVelhaRoutingModule
  ],
  exports: [
    JogoDaVelhaComponent
  ],
  providers: [
    JogoDaVelhaService
  ]
})
export class JogoDaVelhaModule { }
