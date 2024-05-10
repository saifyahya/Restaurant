import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from '../../service/order-service.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Order } from '../../model/order';
import { Cart } from '../../model/cart';
import { CartServiceService } from '../../service/cart-service.service';

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css',
})
export class OrderDetailsComponent implements OnInit{
 order:Order|any=null;
  constructor(private service:OrderServiceService, private route:ActivatedRoute, private cartService:CartServiceService){
  }

  ngOnInit(): void {
      this.getOrder();
  }

  getOrder(){
    let id = this.route.snapshot.params["id"];
    console.log(id);
    this.service.getOrderById(id).subscribe(data=>this.order=data);
  }

  addToCart(order:Order){
const cartOrder= new Cart(order);
this.cartService.addToCart(cartOrder);
  }
}
