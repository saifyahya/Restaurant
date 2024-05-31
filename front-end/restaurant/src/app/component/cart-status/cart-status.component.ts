import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../../service/cart-service.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart-status',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cart-status.component.html',
  styleUrl: './cart-status.component.css'
})
export class CartStatusComponent implements OnInit{
  totalQuantity:number=0;
totalPrice:number=0;
  ngOnInit(): void {
      this.getCartStatus();
  }

  constructor(private cartService:CartServiceService){}
getCartStatus(){
this.cartService.totalPrice.subscribe(data=>this.totalPrice=data);
this.cartService.totalQuantity.subscribe(data=>this.totalQuantity=data);
}
}
