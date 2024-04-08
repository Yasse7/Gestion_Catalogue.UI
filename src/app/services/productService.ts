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
  private deleteurl = "http://localhost:5288/api/Product";
  constructor(private http : HttpClient) { }
  public GetProducts() : Observable<Product[]> {
    return this.http.get<Product[]>(this.GetUrl); 
  }

  public updateProduct(product : Product) : Observable<Product[]> {
    return this.http.put<Product[]>(
     "http://localhost:5288",
      product
    );
  }

  public deleteProduct(product: Product): Observable<Product[]> {
    return this.http.delete<Product[]>(
      `${this.deleteurl}/${product.id}`
    );
  }
  public createHero(product: Product): Observable<Product[]> {
    return this.http.post<Product[]>(
     "http://localhost:5288/",
      product
    );
  }


}
