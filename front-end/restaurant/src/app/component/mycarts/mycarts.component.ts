import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CheckoutService } from '../../service/checkout.service';
import { UserItems } from '../../model/user-items/user-items';
import { UserAddress } from '../../model/user-address/user-address';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { UserCart } from '../../model/user-cart/user-cart';

@Component({
  selector: 'app-mycarts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mycarts.component.html',
  styleUrl: './mycarts.component.css'
})
export class MycartsComponent implements OnInit {
  userCart: UserCart[] = [];
  userItems: UserItems[] = [];
  toAddressCart: UserAddress;
  fromAddressCart: UserAddress;
  ngOnInit(): void {
    this.getMyCarts()
  }
  constructor(private checkoutService: CheckoutService) {
  }

  getMyCarts() {
    this.checkoutService.fetchCarts().subscribe({
      next: data => {
        this.userCart = data;
        console.dir(this.userCart);
      },
      error: (error: HttpErrorResponse) => {
        if (error.status === 404) {
          this.userCart = [];
          console.log('No carts found:', error.error);
        } else {
          console.error('Error fetching carts:', error.message);
        }
      }
    }
    );
  }

  deleteCart(cartCode: string): void {
    if (window.confirm('Are you sure you want to delete this cart?')) {
      this.checkoutService.deleteCartByCode(cartCode).subscribe({
        next: data => {
          console.log(data);
          this.getMyCarts();
        },
        complete: () => {
          console.log("Cart deletion completed")
        },
        error: error => {
          console.error('Error deleting cart:', error);


        }
      });
    }
  }
}
