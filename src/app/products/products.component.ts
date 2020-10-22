import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Produit } from '../models/produit';
import { Observable } from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  produits : Observable<Produit[]>

  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
    this.produits = this.apiService.getProducts();

  }

  receiveNameFilter($event){
    this.produits = this.apiService.getProducts().pipe(map(
      (produits: Produit[]) => produits.filter(
      (produit: Produit) => produit.nom.toLowerCase().startsWith($event.toLowerCase())
    )));
  }

  receivePriceFilterInf($event) {
    this.produits = this.apiService.getProducts().pipe(map(
      (produits: Produit[]) => produits.filter(
      (produit: Produit) => produit.prix <= $event
    )));
  }

  receivePriceFilterSup($event) {
    this.produits = this.apiService.getProducts().pipe(map(
      (produits: Produit[]) => produits.filter(
      (produit: Produit) => produit.prix >= $event
    )));
  }
}
