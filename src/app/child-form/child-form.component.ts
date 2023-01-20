import {Component, forwardRef, OnInit} from '@angular/core';
import {

  ControlValueAccessor, FormBuilder,

  FormGroup,

  NG_VALUE_ACCESSOR,

  Validators
} from '@angular/forms';

@Component({
  selector: 'app-child-form',
  templateUrl: './child-form.component.html',
  styleUrls: ['./child-form.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChildFormComponent),
      multi: true,
    }
  ],
})
export class ChildFormComponent implements ControlValueAccessor {
  public basicInfoForm!: FormGroup;
  constructor(private fb:FormBuilder) {
    this.basicInfoForm = this.fb.group({
      email: ["", Validators.required],
      salaire: [10, Validators.required],
    })
  }
  public onTouched:any= () => {};

  writeValue(val: any): void {
    this.basicInfoForm.setValue(val);
  }

  registerOnChange(fn: any): void {
    this.basicInfoForm?.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled
      ? this.basicInfoForm?.disable({ emitEvent: false })
      : this.basicInfoForm?.enable({ emitEvent: false });
  }

}
