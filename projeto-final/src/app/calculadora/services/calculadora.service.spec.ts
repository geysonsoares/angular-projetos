import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from '../services';
import { inject } from '@angular/core';

describe('CalculadoraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service).toBeTruthy();
  });

  it('deve garantir que 1 + 2 = 3', () => {
      const service: CalculadoraService = TestBed.get(CalculadoraService);
      const soma = service.calcular(1, 2, CalculadoraService.SOMA);
      expect(soma).toEqual(3);
  });

  it('deve garantir que 90 - 50 = 40', () => {
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    const subtracao = service.calcular(90, 50, CalculadoraService.SUBTRACAO);
    expect(subtracao).toEqual(40);
  });

  it('deve garantir que 5 * 1000 = 5000', () => {
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    const multiplicacao = service.calcular(5, 1000, CalculadoraService.MULTIPLICACAO);
    expect(multiplicacao).toEqual(5000);
  });

  it('deve garantir que 20 / 2 = 10', () => {
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    const divisao = service.calcular(20, 2, CalculadoraService.DIVISAO);
    expect(divisao).toEqual(10);
  });

});
