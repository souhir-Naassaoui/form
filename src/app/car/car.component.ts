import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  providers:[{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(()=>CarComponent),
    multi:true
  }]
})
export class CarComponent implements ControlValueAccessor{

  public value:string="";
  onChange: any = () => {}
  onTouched!: () => void;
  disabled: boolean = false;

  constructor() { }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled=isDisabled;
  }

  writeValue(value:string): void {
    this.value=value?value:'';
  }

}
