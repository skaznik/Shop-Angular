import { Component, OnInit } from '@angular/core';
import {Product} from "./Product";
import {ProductStorageService} from "../../product-storage.service";
import {HttpClient} from "@angular/common/http";
import {HttpClientService} from "../../http-client.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productStorage: ProductStorageService, private httpClient: HttpClientService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  products: Product[] = [];

  getProducts() {
    this.httpClient.getProducts().subscribe(products => this.products = products);
  }
  removeProduct(id: number) {
 this.httpClient.removeProduct(id).subscribe(r => {
   this.getProducts();
 });
  }

}
