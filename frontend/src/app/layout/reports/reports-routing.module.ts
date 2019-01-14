import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportsComponent } from './reports/reports.component';
import { DailySalesComponent } from './daily-sales/daily-sales.component';

const routes: Routes = [
  {
    path: '',
    component: ReportsComponent,
    children: [
      { path: '', redirectTo: 'daily-sales', pathMatch: 'prefix' },
      { path: '/daily-sales', component: DailySalesComponent }
    ]
  },
  // { path: '/daily-sales', component: DailySalesComponent },
  // { path: '/appointments', component: DailySalesComponent },
  // { path: '/invoices', component: DailySalesComponent },
  // { path: '/vouchers', component: DailySalesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
