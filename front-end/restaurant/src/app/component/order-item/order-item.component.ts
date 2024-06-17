import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { OrderServiceService } from '../../service/order-service.service';
import { Order } from '../../model/order';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { CartServiceService } from '../../service/cart-service.service';
import { Cart } from '../../model/cart';
import { HttpEventType } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-order-item',
  standalone: true,
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css'],
  imports: [CommonModule, RouterLink, NgbPagination]
})
export class OrderItemComponent implements OnInit, DoCheck ,OnDestroy{
  orders: Order[] = [];
  page: number = 1;
  allRecords = 0;
  pageSize = 5;
  previousState: any = {};
  subscription:Subscription;
  previousRouteParams: any={};

  constructor(
    private order_service: OrderServiceService,
    private route: ActivatedRoute,
    private cartService: CartServiceService,
  ) { }

  ngOnDestroy(): void {
    if(this.subscription)
   this.subscription.unsubscribe();
  console.log("on destroy triggered")
  }

  ngOnInit(): void {
   this.subscription= this.route.paramMap.subscribe(() => this.checkCurrentRoute());

    this.savePreviousState();  // Save initial state

  }

  ngDoCheck(): void {
    this.logChanges();  // Log changes during each change detection run
    console.log("do check triggered")

  }

  savePreviousState(): void {
    this.previousState = {
      orders: JSON.stringify(this.orders),
      page: this.page,
      allRecords: this.allRecords,
      pageSize: this.pageSize
    };
  }

  logChanges(): void {
    const currentState = {
      orders: JSON.stringify(this.orders),
      page: this.page,
      allRecords: this.allRecords,
      pageSize: this.pageSize
    };

    if (this.previousState.orders !== currentState.orders) {
      console.log('Orders changed');
      console.log('Previous:', JSON.parse(this.previousState.orders));
      console.log('Current:', JSON.parse(currentState.orders));
    }
    if (this.previousState.page !== currentState.page) {
      console.log('Page changed from', this.previousState.page, 'to', this.page);
    }
    if (this.previousState.allRecords !== currentState.allRecords) {
      console.log('Total records changed from', this.previousState.allRecords, 'to', this.allRecords);
    }
    if (this.previousState.pageSize !== currentState.pageSize) {
      console.log('Page size changed from', this.previousState.pageSize, 'to', this.pageSize);
    }

    this.savePreviousState();  // Update previous state
  }

  checkCurrentRoute(): void {
    const currentRouteParams = {
      id: this.route.snapshot.paramMap.get('id'),
      name: this.route.snapshot.paramMap.get('name')
    };
console.log('old route params: ',JSON.stringify(this.previousRouteParams))
console.log('current route params: ',JSON.stringify(currentRouteParams))

    if (JSON.stringify(this.previousRouteParams) !== JSON.stringify(currentRouteParams)) {
      this.previousRouteParams = currentRouteParams;
      this.getOrdersCount();  // Fetch the orders count whenever the route parameters change
    }
    
    if (this.route.snapshot.paramMap.has('id')) {
      this.getOrderBYCatId();
    } else if (this.route.snapshot.paramMap.has('name')) {
      this.getOrdersContainingName();
    } else {
      this.getAllOrders();
    }
  }

  getAllOrders(): void {
    // this.order_service.getOrdersCount().subscribe(data => {
    //   this.allRecords = data;
    // });

    this.order_service.getAllOrders(this.page === 0 ? 0 : this.page - 1, this.pageSize).subscribe((event) => {
      switch (event.type) {
        case HttpEventType.Sent:
          console.log("Order HTTP request sent");
          break;
        case HttpEventType.DownloadProgress:
          console.log("Download in progress.. " + event.loaded);
          break;
        case HttpEventType.Response:
          console.log(event.body);
          this.orders = <Order[]>event.body;
          break;
      }
    });
  }

  getOrderBYCatId(): void {
    const catId = this.route.snapshot.paramMap.get('id');
    // this.order_service.getOrdersCountByCategoryId(catId).subscribe(data => {
    //   this.allRecords = data;
    // });

    this.order_service.getOrderByCategoryId(catId, this.page === 0 ? 0 : this.page - 1, this.pageSize).subscribe(data => {
      this.orders = data;
    });
  }

  getOrdersContainingName(): void {
    const orderName = this.route.snapshot.paramMap.get('name');
    this.order_service.getOrdersCountByNameContaining(orderName).subscribe(data => {
      this.allRecords = data;
    });

    this.order_service.getOrdersContainingName(orderName, this.page === 0 ? 0 : this.page - 1, this.pageSize).subscribe(data => {
      this.orders = data;
    });
  }

   do(): void {
     this.checkCurrentRoute();
  }

  onChange(event: Event): void {
    this.pageSize = +(event.target as HTMLSelectElement).value;
    this.checkCurrentRoute();
  }

  addToCart(order: Order): void {
    const cartOrder = new Cart(order);
    this.cartService.addToCart(cartOrder);
  }

  getOrdersCount():void{
    if (this.route.snapshot.paramMap.has('id')) {
    const catId = this.route.snapshot.paramMap.get('id');
    this.order_service.getOrdersCountByCategoryId(catId).subscribe(data => {
      this.allRecords = data;
    });
  } else if(this.route.snapshot.paramMap.has('name')){
    const orderName = this.route.snapshot.paramMap.get('name');
    this.order_service.getOrdersCountByNameContaining(orderName).subscribe(data => {
      this.allRecords = data;
    });
  }
  else{
    this.order_service.getOrdersCount().subscribe(data => {
      this.allRecords = data;
    });
  }

  }
}
