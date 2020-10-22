import { Injectable } from '@angular/core';
import { Produit } from './models/produit';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http:HttpClient) { }

      public getProducts () : Observable<Produit[]> {
          return this.http.get<Produit[]>(environment.backendProduit);
        }
}
