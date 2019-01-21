import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
// import { BrowserModule } from '@angular/platform-browser';
import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './charts.component';
import { PageHeaderModule } from '../../shared';
import { NgxTuiCalendarModule } from 'ngx-tui-calendar';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { FullCalendarModule } from 'ng-fullcalendar'

import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { HelloComponent } from './hello.component';
import { EventSesrvice } from './event.service';

@NgModule({
    imports: [
    	// BrowserModule,
    	FormsModule,
    	FullCalendarModule,
	    CommonModule, 
	    Ng2Charts, 
	    ChartsRoutingModule, 
	    PageHeaderModule, 
	    NgxTuiCalendarModule.forRoot(),
	    CalendarModule.forRoot({
	    	provide: DateAdapter,
	    	useFactory: adapterFactory
	    })
    ],
    declarations: [ChartsComponent,HelloComponent],
	  bootstrap:    [ ChartsComponent ],
	  providers: [ EventSesrvice ]
})
export class ChartsModule {}
