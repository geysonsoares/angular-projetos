import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ConversorModule } from './conversor';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ConversorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
