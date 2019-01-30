import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventoryComponent } from './inventory.component';
import { ProductComponent } from './product/product.component';
import { BrandComponent } from './brand/brand.component';
import { OrderComponent } from './order/order.component';
import { CategoryComponent } from './category/category.component';
import { SupplierComponent } from './supplier/supplier.component';

const routes: Routes = [
    {
      path: '', component: InventoryComponent, children: [
        {
          path: '',   redirectTo: 'product', pathMatch: 'full',
        },
        {
          path: 'products',
          component: ProductComponent
        },
        {
          path: 'orders',
          component: OrderComponent
        },
        {
          path: 'brands',
          component: BrandComponent
        },
        {
          path: 'categories',
          component: CategoryComponent
        },
        {
          path: 'supplier',
          component: SupplierComponent
        },
      ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InventoryRoutingModule { }
