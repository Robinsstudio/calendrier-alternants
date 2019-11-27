import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { CalendarDayComponent } from './calendar-day/calendar-day.component';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
	declarations: [
		AppComponent,
		CalendarDayComponent,
		CalendarComponent
	],
	imports: [
		BrowserModule,
		FontAwesomeModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
