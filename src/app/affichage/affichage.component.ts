import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EventDrivenService} from '../state/EventDrivenService';
import {ActionEvent, ActionTypes} from '../state/ActionEvent';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css'],
   changeDetection:ChangeDetectionStrategy.Default,
})
export class AffichageComponent implements OnInit {
  private _form:any;
  @Input()
  set infosInput(form:any){
    this._form=form;
  }
  get infosInput():any{
    return this._form;
  }

  @Input() display:boolean=false;
  @Output() eventEmitter:EventEmitter<ActionEvent>=new EventEmitter<ActionEvent>();
message:string="hi"

  constructor(private eventDrivenService:EventDrivenService,public snackBar: MatSnackBar) { }

  ngOnInit(): void {
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
