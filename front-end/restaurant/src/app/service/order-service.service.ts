import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Order } from '../model/order';
import { HttpClient, HttpEvent, HttpRequest} from '@angular/common/http'; // Import HttpClient for making HTTP requests



@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {
  private baseUrl: string = "http://localhost:8087/api/";
// getAllOrdersObs$=this.getAllOrders;
// getOrdersByCatIdObs$=this.getOrderByCategoryId;
// getOrdersContainNameObs$=this.getOrdersContainingName;
  constructor(private http:HttpClient) {
   }

   getAllOrders( page: number |null, size: number |null):Observable<HttpEvent<unknown>> {
    const api = this.baseUrl+"allOrders"+"?page="+page+"&size="+size
    const request = new HttpRequest(
      "GET",api,{reportProgress:true}
    )
    return this.http.request(request);
    // return this.http.get<Order[]>(this.baseUrl+"allOrders"+"?page="+page+"&size="+size).pipe(
    //   map(response => response)
    // );
   }
   getOrderByCategoryId(id: string | null, page: number |null, size: number |null):Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl+"category?id="+id+"&page="+page+"&size="+size).pipe(
      map(response => response)
    );
   }
   getOrdersContainingName(name: string |null, page: number |null, size: number |null ):Observable<Order[]> {
    console.log(this.baseUrl+"orders?name="+name);

    return this.http.get<Order[]>(this.baseUrl+"orders?name="+name+"&page="+page+"&size="+size).pipe(
      map(response => response)

    );
   }

   getOrderById(id: number):Observable<Order>{
    return this.http.get<Order>(this.baseUrl+"orders/"+id).pipe(map(response=>response));
   }


   getOrdersCount():Observable<number>{
    return this.http.get<number>(`${this.baseUrl}orders/count`).pipe(map(response=>response));
   }

   getOrdersCountByCategoryId(id: null|string):Observable<number>{
    return this.http.get<number>(`${this.baseUrl}orders/count/${id}`).pipe(map(response=>response));
   }

   getOrdersCountByNameContaining(name:string|null):Observable<number>{
    return this.http.get<number>(`${this.baseUrl}orders/count/name?name=${name}`).pipe(map(response=>response));
   }
}
