import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})

export class ProductService {
  //on doit ajouter http client module  pour faire appel a l'api
  private GetUrl = "http://localhost:5288/api/Product/products";
  constructor(private http : HttpClient) { }
  public GetProducts() : Observable<Product[]> {
    return this.http.get<Product[]>(this.GetUrl); 
  }
}
