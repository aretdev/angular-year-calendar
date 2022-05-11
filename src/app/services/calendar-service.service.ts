import { Injectable } from '@angular/core';
import { Day } from '../models/festiveDay.model';

@Injectable({
  providedIn: 'root'
})
export class CalendarServiceService {


  private Days : Day[] = [
    {id : 1, festiveDate : new Date(1,2,2022), isGeneric : false, description : "San Vicente1", isFestive : true},
    {id : 2, festiveDate : new Date(3,4,2022), isGeneric : true, description : "San Vicente2", isFestive : true},
    {id : 3, festiveDate : new Date(5,6,2022), isGeneric : false, description : "San Vicente3", isFestive : true},
    {id : 4, festiveDate : new Date(7,12,2022), isGeneric : false, description : "San Vicente4", isFestive : true},
    {id : 5, festiveDate : new Date(26,11,2022), isGeneric : true, description : "San Vicente5", isFestive : true},
    {id : 6, festiveDate : new Date(25,12,2022), isGeneric : false, description : "San Vicente6", isFestive : true},
    {id : 7, festiveDate : new Date(6,1,2022), isGeneric : false, description : "San Vicente7", isFestive : true},
    {id : 8, festiveDate : new Date(12,4,2022), isGeneric : true, description : "San Vicente8", isFestive : true},
    {id : 9, festiveDate : new Date(20,2,2022), isGeneric : false, description : "San Vicente9", isFestive : true},
    {id : 10, festiveDate : new Date(17,5,2022), isGeneric : false, description : "San Vicente10", isFestive : true},
    {id : 200, festiveDate : new Date(5,7,2022), isGeneric : false, description : "San Vicente11", isFestive : true},
    {id : 20, festiveDate : new Date(20,10,2022), isGeneric : true, description : "San Vicente12", isFestive : true},


  ]


  constructor() { }
}
