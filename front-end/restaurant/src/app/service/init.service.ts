import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InitService {
data:any;
  constructor(private http:HttpClient) {
   }

   init(){
    this.http.get('src/assets/config.json').pipe(tap((config)=>this.data=config))
   }
}
