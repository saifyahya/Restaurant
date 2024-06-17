import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, shareReplay } from 'rxjs';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
private baseUrl = "http://localhost:8087/api/allCategories";
  constructor(private http:HttpClient) { }

    allCategoriesObservable$= this.getAllCategories();
  getAllCategories(): Observable<Category[]> {
    const header= new HttpHeaders({'token':'12345'})
    return this.http.get<Category[]>(this.baseUrl,{headers:header}).pipe(
      map(data => {
       // data.forEach(x => console.log(x));
        return data; 
      }),shareReplay(1),
      catchError((err)=>{
        console.log(err.message);
        return of([]);
      })
    );
  }
}
