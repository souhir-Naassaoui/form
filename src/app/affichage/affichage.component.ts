import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EventDrivenService} from '../state/EventDrivenService';
import {ActionEvent, ActionTypes} from '../state/ActionEvent';
import {MatSnackBar} from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import {NotificationService} from '../notification.service';

@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css'],
   changeDetection:ChangeDetectionStrategy.Default,
})
export class AffichageComponent implements OnInit {
  private _form:any;
  description:string="";
  @Input()
  set infosInput(form:any){
    this._form=form;

  }
  get infosInput():any{
    return this._form;
  }
  private valSalary!: any;
  @Input() set childSalary(value: any) {
    this.valSalary = value;  this.showSweetAlert()
  }
  get childSalary(): any { return this.valSalary; }
  private disp:boolean=false;
  @Input()
  set display(val:boolean){
    this.disp=val;
  }
  get display():boolean{
    return this.disp;
  }

  showSweetAlert(){
    if(this.valSalary>=2500){
      this.notif.showError(" the salary exceeds the threshold!" +this.valSalary+" >= " +2500+"", "Salary limit")
    }
  }

  @Output() eventEmitter:EventEmitter<ActionEvent>=new EventEmitter<ActionEvent>();
  message:string="hi"

  constructor(private eventDrivenService:EventDrivenService,public snackBar: MatSnackBar, private notif:NotificationService) { }

  ngOnInit(): void {

  console.log("this.display ",this.disp)
  }


  onAfficher(){
    this.eventDrivenService.publishEvent({type:ActionTypes.DISPLAY_INFO});
  }

  onAddAge(){
    this.eventDrivenService.publishEvent({type:ActionTypes.INCREMENT_AGE});
  }
  onCheck(){
    this.eventEmitter.emit({type:ActionTypes.CHECK_AGE});
  }

}
