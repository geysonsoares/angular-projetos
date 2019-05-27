/**
 * Serviço das operações da calculadora.
 * @author Geyson Soars
 * @since 1.0.0
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }

  /**
   * Método que calcular uma operação matemática dado dois números.
   * @param num1 number
   * @param num2 number
   * @param operacao string Operação a ser executada
   * @returns number Resultado da operação
   */
  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number;

    switch (operacao) {
      case CalculadoraService.SOMA:
        resultado = this.somar(num1, num2);
        break;
      case CalculadoraService.SUBTRACAO:
        resultado = this.subtrair(num1, num2);
        break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = this.multiplicar(num1, num2);
        break;
      case CalculadoraService.DIVISAO:
        resultado = this.dividir(num1, num2);
        break;
      default:
        resultado = 0;
    }
    return resultado;
  }

  subtrair(num1: number, num2: number): number {
    return num1 - num2;
  }

  somar(num1: number, num2: number): number {
    return num1 + num2;
  }

  multiplicar(num1: number, num2: number): number {
    return num1 * num2;
  }

  dividir(num1: number, num2: number): number {
    return num1 / num2;
  }

}
