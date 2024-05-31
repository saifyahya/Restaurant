import { Routes } from '@angular/router';
import { OrderItemComponent } from './component/order-item/order-item.component';
import { CategoryItemComponent } from './component/category-item/category-item.component';
import { SearchOrderComponent } from './component/search-order/search-order.component';
import { OrderDetailsComponent } from './component/order-details/order-details.component';
import { PurchasesComponent } from './component/purchases/purchases.component';
import { CheckOutComponent } from './component/check-out/check-out.component';
import { MycartsComponent } from './component/mycarts/mycarts.component';

export const routes: Routes = [ 
        // http://localhost:4200/mycarts
{ path: 'mycarts', component: MycartsComponent },
    // http://localhost:4200/checkout
{ path: 'checkout', component: CheckOutComponent },

// http://localhost:4200/purchases
{ path: 'purchases', component: PurchasesComponent },

// http://localhost:4200/orders
{ path: 'orders', component: OrderItemComponent },

// http://localhost:4200/orders/:id
{ path: 'orders/:id', component: OrderDetailsComponent },


// http://localhost:4200/category
{ path: 'category', component: CategoryItemComponent},

//http://localhost:4200/category/id/:id
{ path: 'category/id/:id', component: OrderItemComponent},

// http://localhost:4200/category/name/:name
{ path: 'category/name/:name', component: OrderItemComponent},

// http://localhost:4200/any
{ path: '', redirectTo:'/orders',pathMatch:'full'},

// any invalid thing not in routes
{ path: '**', redirectTo:'/orders',pathMatch:'full'}

];
