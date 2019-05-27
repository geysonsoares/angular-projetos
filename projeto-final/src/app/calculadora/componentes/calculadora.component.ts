import { Component, OnInit } from '@angular/core';

import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  private numero1: string;
  private numero2: string;
  private resultado: number;
  private operacao: string;

  constructor(private  calculadoraService: CalculadoraService) { }

  ngOnInit() {
    this.limpar();
  }

  /**
   * Inicia todos valores para o padrão.
   * @returns void
   */
  limpar(): void {
    this.numero1 = '0';
    this.numero2 = null;
    this.resultado = null;
    this.operacao = null;
  }

  /**
   * Adicioa número selecionado
   * @param numero string
   * @returns void
   */
  adicionarNumero(numero: string): void {
    if (this.operacao === null) {
      this.numero1 = this.concatenarNumero(this.numero1, numero);
    } else {
      this.numero2 = this.concatenarNumero(this.numero2, numero);
    }
  }

  /**
   * Retorna número concatenado. Trata o separador decimal.
   * @param numeroAtual string
   * @param numeroConcat string
   * @returns string
   */
  concatenarNumero(numeroAtual: string, numeroConcat: string): string {
    if (numeroAtual === '0' || numeroAtual === null) {
      numeroAtual = '';
    }

    if (numeroConcat === '.' && numeroAtual === '') {
      return '0.';
    }

    if (numeroConcat === '.' && numeroAtual.indexOf('.') > -1) {
      return numeroAtual;
    }

    return numeroAtual + numeroConcat;
  }

  /**
   * Define operação.
   * Caso já possua operação, executa operação anterior, e define a nova operação.
   * @param operacao string
   * return void
   */
  definirOperacao(operacao: string): void {
    if (this.operacao === null) {
      this.operacao = operacao;
      return;
    }

    if (this.numero2 !== null) {
      this.resultado = this.calculadoraService.calcular(
        parseFloat(this.numero1), parseFloat(this.numero2), this.operacao
      );
      this.operacao = operacao;
      this.numero1 = this.resultado.toString();
      this.numero2 = null;
      this.resultado = null;
    }
  }

  /**
   * Efetua o cálcula de uma operação
   * @returns void
   */
  calcular(): void {
    if (this.numero2 === null) {
      return;
    }

    this.resultado = this.calculadoraService.calcular(
      parseFloat(this.numero1), parseFloat(this.numero2), this.operacao
    );
  }

  /**
   * Retorna o valor a ser exibido na tela da calculadora.
   * @returns string
   */
  get display(): string {
    if (this.resultado !== null) {
     return this.resultado.toString();
    }
    if (this.numero2 !== null) {
      return this.numero2;
    }
    return this.numero1;
  }



}
