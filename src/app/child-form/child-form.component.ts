import {Component, forwardRef, Input, OnDestroy, OnInit} from '@angular/core';
import {

  ControlValueAccessor, FormBuilder,

  FormGroup,

  NG_VALUE_ACCESSOR,

  Validators
} from '@angular/forms';
import {Subscription} from 'rxjs';

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
export class ChildFormComponent implements ControlValueAccessor{
  public basicInfoForm!: FormGroup;
  onChangeSub?:Subscription;
  @Input() submitted:boolean=false;

  constructor(private fb:FormBuilder) {
    this.basicInfoForm = this.fb.group({
      email: ["", Validators.required],
      salaire: [, Validators.required],
    })
  }
  public onTouched:any= () => {};
  public onChanged:any= () => {};

  writeValue(val: any): void {
    //if(val.email !== "") console.log(val.email)
    this.basicInfoForm.setValue(val);
    this.onChanged("vvvvvvvv ",val)

  }

  registerOnChange(onChanged:any): void {

    this.basicInfoForm?.valueChanges.subscribe(onChanged);
  }



  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // setDisabledState?(isDisabled: boolean): void {
  //   isDisabled
  //     ? this.basicInfoForm?.disable({ emitEvent: false })
  //     : this.basicInfoForm?.enable({ emitEvent: false });
  // }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.basicInfoForm.disable();
    } else {
      this.basicInfoForm.enable();
    }
  }



  }
