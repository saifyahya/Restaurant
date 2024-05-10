import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from '../../service/order-service.service';
import { Order } from '../../model/order';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { CartServiceService } from '../../service/cart-service.service';
import { Cart } from '../../model/cart';


@Component({
  selector: 'app-order-item',
  standalone:true,
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css'],
  imports:[CommonModule,RouterLink,NgbPagination]
})
export class OrderItemComponent implements OnInit {
  orders: Order[] = [];
  page:number=0;
  allRecords=0;
  pageSize=3;
  saif="saif123"

  constructor(private order_service: OrderServiceService, private route:ActivatedRoute,
    private cartService:CartServiceService
  ) { }

  ngOnInit(): void {
this.route.paramMap.subscribe(
  () =>
  this.checkCurrentRoute()
);
  }

  checkCurrentRoute(): void{
    let hasId = this.route.snapshot.paramMap.has('id');
    if(hasId){
      console.log("inside has id")
this.getOrderBYCatId();
    }else if(this.route.snapshot.paramMap.has('name')){
      console.log("inside has name")
      this.getOrdersContainingName();

    }else{
      this.getAllOrders();
    }

  }
  getAllOrders(): void {
// update the total nuber of orders to make the pagination correct
this.order_service.getOrdersCount().subscribe(data=>{
  this.allRecords=data;})

    this.order_service.getAllOrders(this.page-1,this.pageSize).subscribe(data => {
      this.orders = data;
      this.orders.forEach(data=>console.log(data))
    });
  }
  getOrderBYCatId(): void {
    let catId = this.route.snapshot.paramMap.get('id');
// update the total nuber of orders to make the pagination correct
    this.order_service.getOrdersCountByCategoryId(catId).subscribe(data=>{
      this.allRecords=data;})

    this.order_service.getOrderByCategoryId(catId,this.page-1,this.pageSize).subscribe(data => {
      this.orders = data;

    });

  }

  getOrdersContainingName():void{
    let orderName = this.route.snapshot.paramMap.get('name');
//    update the total nuber of orders to make the pagination correct
    this.order_service.getOrdersCountByNameContaining(orderName).subscribe(data=>{
      this.allRecords=data;})
    console.log(orderName)
    this.order_service.getOrdersContainingName(orderName,this.page-1,this.pageSize).subscribe(data=>this.orders=data);
  }

  do():void{
this.checkCurrentRoute();
  }

  onChange(event:Event){
    this.pageSize=+(<HTMLSelectElement>event.target).value;
    this.checkCurrentRoute();
  }

  addToCart(order:Order){
    const cartOrder= new Cart(order);
    this.cartService.addToCart(cartOrder);
  }
}
