import {Component, OnInit} from '@angular/core';
import {EventDrivenService} from '../state/EventDrivenService';
import {ActionTypes} from '../state/ActionEvent';

@Component({
  selector: 'app-child-button',
  templateUrl: './child-button.component.html',
  styleUrls: ['./child-button.component.css']
})
export class ChildButtonComponent implements OnInit {

  constructor(private eventDrivenService:EventDrivenService) { }

  ngOnInit(): void {
  }
  onIncrementSalary(){
    this.eventDrivenService.publishEvent({type:ActionTypes.INCREMENT_SALARY});
  }
}
