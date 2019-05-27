import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ConversorComponent } from './components';
import { MoedaService } from './services';
import { ConversorService } from './services';
import { NumeroDirective } from './directives/numero.directive';
import { ModalCotacaoComponent } from './utils';
import { DataBrPipe } from './pipes';

import { ConversorRoutingComponent } from './conversor-routing.component';
import { ConversorRoutingModule } from './conversor-rounting.module';


@NgModule({
  declarations: [
    ConversorComponent,
    NumeroDirective,
    ModalCotacaoComponent,
    DataBrPipe,
    ConversorRoutingComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ConversorRoutingModule
  ],
  exports: [
    ConversorComponent
  ],
  providers: [
    MoedaService,
    ConversorService
  ]
})
export class ConversorModule { }
