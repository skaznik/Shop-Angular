import { Injectable } from '@angular/core';
import {Product} from "./shop/products/Product";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductStorageService {

  constructor() { }

  private products: Product[] = [
    {id: 1, name: 'Produkt 1', price: 10.00, quantity: 1000, available: true},
    {id: 2, name: 'Produkt 2', price: 15.00, quantity: 10, available: false}
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }
}
