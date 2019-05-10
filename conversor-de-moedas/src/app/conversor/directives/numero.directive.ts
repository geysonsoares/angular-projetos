import { Directive, HostListener, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';


@Directive({
  selector: '[numero]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: NumeroDirective,
    multi: true
  }]
})
export class NumeroDirective implements ControlValueAccessor {

  onTouched: any;
  onChange: any;

  constructor(private el: ElementRef) { }

  @HostListener('keyup', ['$event'])
  onkeyup($event: any) {
    let valor = $event.target.value;
    let posDecimal = valor.indexOf('.');

    valor = valor.replace(/[\D]/g, '');

    if ( posDecimal > 0 ) {
      valor = valor.substr(0, posDecimal) + '.' + valor.substr(posDecimal);
    }

    $event.target.value = valor;
    this.onChange(valor);
  }

  writeValue(obj: any): void {
    this.el.nativeElement.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error("Method not implemented.");
  }

}
