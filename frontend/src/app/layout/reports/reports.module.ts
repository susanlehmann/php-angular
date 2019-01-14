import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports/reports.component';
import { DailySalesComponent } from './daily-sales/daily-sales.component';

@NgModule({
  declarations: [ReportsComponent, DailySalesComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
