import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalendarYearComponent } from './components/calendar-year/calendar-year.component';
import { CalendarDayComponent } from './components/calendar-day/calendar-day.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarYearComponent,
    CalendarDayComponent,    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
