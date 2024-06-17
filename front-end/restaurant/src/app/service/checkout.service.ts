import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { Cart } from '../model/cart';
import { CartServiceService } from './cart-service.service';
import { UserCart } from '../model/user-cart/user-cart';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http:HttpClient,private cartService:CartServiceService) { }
orders:Cart[]=[];
  private baseUrl=  "http://localhost:8087/api/purchase";
  stripId(orders:Cart){
    const{id,...res} = orders;
    return res;
  }
  checkout(client: FormGroup, toAddress: FormGroup, fromAddress: FormGroup,totalQuantity:number,totalPrice:number):Observable<any> {
this.orders=this.cartService.getCart();
   let cartOrderDto = this.orders.map(this.stripId);
    const payload = {
     "clientDto":client,
    "cartOrdersDto": cartOrderDto,
      "cartDto": {
        "price": totalPrice,
        "quantity": totalQuantity
      },
     "toAddressDto": toAddress,
     "fromAddressDto":fromAddress
    };
    console.log("request data: ",payload)
    return this.http.post<any>(this.baseUrl, payload);
  }

fetchCarts():Observable<UserCart[]>{
  return this.http.get<UserCart[]>(`${this.baseUrl}?email=saifbarakat991@gmail.com`).pipe(map(data=>data));
}


deleteCartByCode(code:string):Observable<any>{
  console.log("code",code)
return this.http.delete(`${this.baseUrl}?code=${code}`).pipe(map(data=>data));
}

}
