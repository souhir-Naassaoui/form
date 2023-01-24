import {Component, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EventDrivenService} from '../state/EventDrivenService';
import {ActionEvent, ActionTypes} from '../state/ActionEvent';
import Swal from 'sweetalert2'
import {ChildFormComponent} from '../child-form/child-form.component';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit {
  @ViewChild(ChildFormComponent) child:any;
  infoFormGroup?:FormGroup;
  age=0;
  submitted:boolean=false;
  display:boolean=false;
  message:string|null=null;
  _salary:any;

  constructor(private fb:FormBuilder,private eventDrivenService:EventDrivenService) { }

  ngOnInit(): void {
    this.infoFormGroup=this.fb.group({
      firstname:["",Validators.required],
      lastname:["",Validators.required],
      age:[10,Validators.required],
       basicInfo:[{ email: "", salaire: 1500 }]
    })

    this.age=this.infoFormGroup?.value.age;
    this._salary=this.infoFormGroup?.value.basicInfo.salaire;


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
    this.infoFormGroup?.get('basicInfo')?.patchValue({
      email: this.infoFormGroup?.get('basicInfo')?.value.email,
      salaire: Number(this.infoFormGroup?.get('basicInfo')?.value.salaire)+100
    })
    this.message=null;
  }

  onAddAge(){
    const an=Number(this.infoFormGroup?.get('age')?.value)  ;
    console.log(typeof an);
    this.infoFormGroup?.get('age')?.setValue(an+5);
    console.log(this.infoFormGroup?.get('age')?.value);
    this.message=null;
  }
  onAfficher(){
    this.submitted=true;
    //this.display=true;
   // console.log(this.employeeFormGroup?.controls)
   // console.log("this.child.childSubmitted ",this.child.childSubmitted)
    if(this.infoFormGroup?.valid && this.child.basicInfoForm.valid) this.display=true;
  }

  checkAge(){
    console.log('hello');
    const age=Number(this.infoFormGroup?.get('age')?.value)  ;
    if(age<18){
      // this.message="Vous etes mineur";
      Swal.fire('Vous etes mineur')
    }else{
      // this.message="Vous etes majeur";
      Swal.fire('Vous etes majeur')
    }
  }
}
