import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "./shop/products/Product";

const BASE_URL = 'http://localhost:8082/api';
const HTTP_OPTION = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${BASE_URL}/products`);
  }

  removeProduct(id: number) {
   return this.httpClient.delete(`${BASE_URL}/products/remove/${id}`);

  }
}
