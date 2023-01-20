import { Component, OnInit } from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.css'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: TestChildComponent, multi: true}
  ]
})
export class TestChildComponent implements ControlValueAccessor {
  name: FormGroup;
  constructor(fb: FormBuilder) {
    this.name = fb.group({
      firstName:[''],
      lastName: ['']
    });
  }

  /*writeValue(value: any) {
    if(value) {
      this.name.setValue(value);
    }
  }

  registerOnChange(fn: (value: any) => void) {
    this.name.valueChanges.subscribe(fn);
  }

  registerOnTouched() {}*/

  public onTouched:any= () => {};
  writeValue(val: any): void {
    this.name.setValue(val);
  }

  registerOnChange(fn: any): void {
    this.name?.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
