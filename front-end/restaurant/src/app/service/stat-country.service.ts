import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,map } from 'rxjs';
import { Country } from '../model/country';
import { State } from '../model/state';

@Injectable({
  providedIn: 'root'
})
export class StatCountryService {
private baseUrl="http://localhost:8087/api";


  constructor(private http:HttpClient) {}

  getAllCountries():Observable<Country[]>{
    return this.http.get<Country[]>(`${this.baseUrl}/countries`).pipe(
      map(data=> data)
    );
  }
  getAllStates():Observable<State[]>{
    return this.http.get<State[]>(`${this.baseUrl}/states`).pipe(
      map(data => data)
    );
  }

  getStatesByCountryName(name:String):Observable<State[]>{
  
    return this.http.get<State[]>(`${this.baseUrl}/states/${name}`).pipe(map(response=>response));
  }
}
