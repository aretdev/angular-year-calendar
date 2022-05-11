import { Component, OnInit } from '@angular/core';
import { Day } from 'src/app/models/festiveDay.model';

@Component({
  selector: 'app-calendar-year',
  templateUrl: './calendar-year.component.html',
  styleUrls: ['./calendar-year.component.css']
})
export class CalendarYearComponent implements OnInit {

  yearDataMonth : Date[] = []
  days = new Map<number, Day>();
  numWeeksMonths : number[] = [];
  monthDays = new Map<[number, number], Day>();

  weekDays = ["Mo","Tu","We","Th","Fr","Sa","Su"]

  constructor() { }

  ngOnInit(): void {

    let daysOfYear = this.getDaysOnAYear(2022);
    let startDate = new Date("2022-01-01");
    let currentMonth = 0;

    for (let index = 1; index <= daysOfYear; index++) {

      this.monthDays.set([currentMonth, index], ({id : undefined, festiveDate : new Date(startDate), isGeneric : undefined, description : "San Vicente1", isFestive : undefined}));

      startDate.setDate(startDate.getDate() + 1)
      
      if(startDate.getMonth() > currentMonth) currentMonth++;
    }
    this.monthDays = new Map([...this.monthDays.entries()].sort((b, a) => new Date(b[1].festiveDate).getTime() - new Date(a[1].festiveDate).getTime()));

   for (let index = 0; index < 12; index++) 
   {
     this.numWeeksMonths.push(this.weeksCount(2022, index))
   }
  }

  getDaysOnAYear(year: number): number {
    return ((year % 4 === 0 && year % 100 > 0) || year %400 == 0) ? 366 : 365;

  }


  counter(i: number) {
    return new Array(i);
  } 

  generateWeek(month : number) {
    let first_day_month =new Date(2022, month, 1).getDay()
    first_day_month = (first_day_month - 1 < 0) ? 0 : first_day_month;
    let filledArray = (first_day_month == 0) ? [] : new Array(first_day_month - 1).fill({})
    return filledArray.concat(Array.from(this.monthDays.values()).filter(x => x.festiveDate.getMonth() == 0))

  }

  weeksCount(year: number, month_number: number) {
    var firstOfMonth = new Date(year, month_number - 1, 1);
    var day = firstOfMonth.getDay() || 6;
    day = day === 1 ? 0 : day;
    if (day) { day-- }
    var diff = 7 - day;
    var lastOfMonth = new Date(year, month_number, 0);
    var lastDate = lastOfMonth.getDate();
    if (lastOfMonth.getDay() === 1) {
        diff--;
    }
    var result = Math.ceil((lastDate - diff) / 7);
    return result + 1;
};
}
