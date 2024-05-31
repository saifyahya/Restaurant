import { Injectable } from '@angular/core';
import { Cart } from '../model/cart';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {


orders:Cart[]=[];
totalQuantity:Subject<number>=new Subject<number>;
totalQuantityNumber:number=0;
totalpriceNumber:number=0;

totalPrice:Subject<number>=new Subject<number>;
  constructor(private http:HttpClient) { }

  addToCart(cartOrder:Cart){
    let existingOrder= this.orders.find(order=>order.id===cartOrder.id);
    if(existingOrder!=undefined){
    existingOrder.quantity+=1;
  }
  else {
    this.orders.push(cartOrder);
  }
  this.updateCart();
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
    let existingOrder = this.orders.find(order => order.id === cartOrder.id);  
 if(existingOrder!=undefined){
  if(existingOrder.quantity>1){
  existingOrder.quantity-=1;}
  else{
   const index=this.orders.findIndex(order=>order.id===cartOrder.id);
   if(index>-1)
   this.orders.splice(index,1);
   console.log("cart details:"+this.orders);
  }
}
this.updateCart();
  }

  removeWholeOrderFromCart(cartOrder:Cart){
   const index=this.orders.findIndex(order=>order.id===cartOrder.id);
   if(index>-1)
   this.orders.splice(index,1);
   console.log("cart details:"+this.orders);
this.updateCart();
  }

  getCart():Cart[]{
    return this.orders;
  }

}
