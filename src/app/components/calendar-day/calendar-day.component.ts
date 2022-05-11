import { Component, Input, OnInit } from '@angular/core';
import { Day } from 'src/app/models/festiveDay.model';

@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.css']
})
export class CalendarDayComponent implements OnInit {


  @Input() referenceDay : Day | undefined;

  isWeekend : boolean = false;
  constructor() { 
  }

  ngOnInit(): void {
    if(this.referenceDay?.festiveDate != undefined) {
      let dayOfTheWeek = this.referenceDay.festiveDate.getDay()
      this.isWeekend = (dayOfTheWeek == 6) || (dayOfTheWeek == 0)
    }
  }

}
