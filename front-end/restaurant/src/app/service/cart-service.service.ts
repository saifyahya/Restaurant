import { Injectable } from '@angular/core';
import { Cart } from '../model/cart';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
orders:Cart[]=[];
totalQuantity:Subject<number>=new Subject<number>;
totalPrice:Subject<number>=new Subject<number>;
  constructor() { }

  addToCart(cartOrder:Cart){
    let existingOrder= this.orders.find(order=>order.id===cartOrder.id);
    if(existingOrder!=undefined){
    existingOrder.quantity+=cartOrder.quantity;
  }
  else {
    this.orders.push(cartOrder);
  }
  this.updateCart();
  console.log(this.orders)
  console.log("total quantity: ",this.totalQuantity)
  console.log("total price: ",this.totalPrice)

  }

  updateCart(){
    let totalPrice=0;
    let totalQuantity=0;

    this.orders.forEach(data=>{
      totalPrice+=(data.quantity*data.price);
      totalQuantity+=data.quantity;
    })
    this.totalPrice.next(totalPrice);
    this.totalQuantity.next(totalQuantity);
  }

  removeFromCart(cartOrder:Cart){
    this.orders = this.orders.filter(order => order.id !== cartOrder.id);  // removing the item
    this.updateCart();
  }
}
