import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet, Routes } from '@angular/router';
import { OrderItemComponent } from './component/order-item/order-item.component';
import { CategoryItemComponent } from './component/category-item/category-item.component';
import { DropdownMenueComponent } from './component/dropdown-menue/dropdown-menue.component';
import { SearchOrderComponent } from './component/search-order/search-order.component';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { CartStatusComponent } from './component/cart-status/cart-status.component';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet,OrderItemComponent, CategoryItemComponent, DropdownMenueComponent,RouterLink,
      SearchOrderComponent,NgbPagination,CartStatusComponent,CommonModule
    ]
})
export class AppComponent {
  title = 'Arabic Restaurant';
  haveSavedCarts=true;
}
