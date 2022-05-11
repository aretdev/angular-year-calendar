import { Component, Input, OnInit } from '@angular/core';
import { Day } from 'src/app/models/festiveDay.model';

@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.css']
})
export class CalendarDayComponent implements OnInit {


  @Input() referenceDay : Day | undefined;

  constructor() { 
  }

  ngOnInit(): void {
  }

}
