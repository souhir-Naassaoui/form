import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name:['Angular'],
      username: [{firstName: 'First', lastName: 'Last'}],
      email:['My Email']
    });
  }

  sayHello() {
    console.log(this.form.value)
  }
}
