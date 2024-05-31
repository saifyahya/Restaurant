import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../../service/cart-service.service';
import { Cart } from '../../model/cart';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchases',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './purchases.component.html',
  styleUrl: './purchases.component.css'
})
export class PurchasesComponent implements OnInit{
  cart:Cart[]=[];
  totalPrice:number=0;
  totalQuantity:number=0;

  ngOnInit(): void {
    
    this.getCartStatus();
    this.getCartStatusForCheckout();

    // for(let temp of this.cart){
    //   this.totalPrice+=temp.price*temp.quantity;
    //   this.totalQuantity+=temp.quantity;
    // }
    this.cartService.updateCart();
  }
  constructor(private cartService:CartServiceService,private router:Router){
  }

  increaseOrders(order:Cart){
this.cartService.addToCart(order);
  }
  decreaseOrders(order:Cart){
    this.cartService.removeFromCart(order)
  }


removeWholeOrder(order:Cart){
  if (window.confirm('Are you sure you want to remove this order?')) {
    this.cartService.removeWholeOrderFromCart(order);
  }
}
getCartStatusForCheckout(){
  this.cartService.totalPrice.subscribe(data=>this.totalPrice=data);
  this.cartService.totalQuantity.subscribe(data=>this.totalQuantity=data);
  }
getCartStatus(){
  this.cart=this.cartService.getCart();
}
checkout(){
  this.router.navigateByUrl("/checkout");
}

}
