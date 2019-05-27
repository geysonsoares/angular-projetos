import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversorComponent } from './conversor.component';
import { MoedaService, ConversorService } from '../services';
import { NumeroDirective } from '../directives';
import { DataBrPipe } from '../pipes';
import { ModalCotacaoComponent } from '../utils';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


describe('ConversorComponent', () => {
  let component: ConversorComponent;
  let fixture: ComponentFixture<ConversorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ConversorComponent,
        NumeroDirective,
        DataBrPipe,
        ModalCotacaoComponent ],
      providers: [ ConversorService, MoedaService ],
      imports: [
        FormsModule, HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
