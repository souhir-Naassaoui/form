import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.css']
})
export class GarageComponent  implements OnInit{

  public nestedForm: FormGroup = new FormGroup({
    firstname:new FormControl(''),
    basicInfo: new FormControl(''),
  });

  ngOnInit() {
    this.nestedForm.patchValue({
      basicInfo: { fname: 'Sourav Dutta', email: 'souravbpd@gmail.com' },
    });
  }

  public onSubmit() {
    console.log('The form value', this.nestedForm.value);
  }

}
