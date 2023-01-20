import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EventDrivenService} from '../state/EventDrivenService';
import {ActionEvent, ActionTypes} from '../state/ActionEvent';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit {

  employeeFormGroup?:FormGroup;
  age=0;
  submitted:boolean=false;
  display:boolean=false;
  message:string|null=null;
  constructor(private fb:FormBuilder,private eventDrivenService:EventDrivenService) { }

  ngOnInit(): void {
    this.employeeFormGroup=this.fb.group({
      firstname:["",Validators.required],
      lastname:["",Validators.required],
      age:[0,Validators.required],
      basicInfo:[{ email: '', salaire: 10 }]

    })

    this.age=this.employeeFormGroup?.value.age;

    this.eventDrivenService.sourceEventSubjectObservable.subscribe((actionEvent:ActionEvent)=>{
      this.onActionEvent(actionEvent);
    });
  }

  onActionEvent($event:ActionEvent){
    switch ($event.type) {
      case ActionTypes.INCREMENT_AGE: this.onAddAge();break;
      case ActionTypes.DISPLAY_INFO: this.onAfficher(); break;
      case ActionTypes.CHECK_AGE: this.checkAge(); break;
      case ActionTypes.INCREMENT_SALARY: this.incrementSalary(); break;
    }
  }

  incrementSalary(){
    // const age=Number(this.employeeFormGroup?.get('age')?.value);
   // this.employeeFormGroup?.get('age')?.setValue(age-5);
    // console.log(this.employeeFormGroup?.get('basicInfo')?.value.salaire)
    this.employeeFormGroup?.get('basicInfo')?.patchValue({
      email: this.employeeFormGroup?.get('basicInfo')?.value.email,
      salaire: this.employeeFormGroup?.get('basicInfo')?.value.salaire+100
    })
    this.message=null;
  }

  onAddAge(){
    const an=Number(this.employeeFormGroup?.get('age')?.value)  ;
    console.log(typeof an);
    this.employeeFormGroup?.get('age')?.setValue(an+5);
    console.log(this.employeeFormGroup?.get('age')?.value);
    this.message=null;
  }
  onAfficher(){
    this.submitted=true;
    this.display=true;
    if(this.employeeFormGroup?.valid) this.display=true;
  }

  checkAge(){
    console.log('hello');
    const age=Number(this.employeeFormGroup?.get('age')?.value)  ;
    if(age<18){
      // this.message="Vous etes mineur";
      Swal.fire('Vous etes mineur')
    }else{
      // this.message="Vous etes majeur";
      Swal.fire('Vous etes majeur')
    }
  }
}
