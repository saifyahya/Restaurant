import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CheckoutService } from '../../service/checkout.service';
import { UserItems } from '../../model/user-items/user-items';
import { UserAddress } from '../../model/user-address/user-address';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mycarts',
  standalone: true,
  encapsulation: ViewEncapsulation.ShadowDom, // Add this line

  imports: [CommonModule],
  templateUrl: './mycarts.component.html',
  styleUrl: './mycarts.component.css'
})
export class MycartsComponent implements OnInit{
userCart:any[]=[];
userItems:UserItems[]=[];
toAddressCart:UserAddress;
fromAddressCart:UserAddress;



  ngOnInit(): void {
      this.getMyCarts()
  }
  constructor(private checkoutService:CheckoutService){
  }

  getMyCarts(){
    this.checkoutService.fetchCarts().subscribe(data=>{this.userCart=data
      console.log(this.userCart)
    });
  }

  deleteCart(cartCode: string): void {
    if (window.confirm('Are you sure you want to delete this cart?')) {
      this.checkoutService.deleteCartByCode(cartCode).subscribe({
        next: data => {
          console.log(data);
          this.getMyCarts(); 
        },
        error: error => {
          console.error('Error deleting cart:', error);
        }
      });
    }
  }
}
