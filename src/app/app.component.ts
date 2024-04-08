import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from './models/product';
import { ProductService } from './services/productService';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Product-Catalog.UI';
  products  : Product[] = [] ;
  ProductToEdit?: Product;
  @Output() productUpdate = new EventEmitter<Product[]>();

  constructor(private productService: ProductService,private http : HttpClient,private route: ActivatedRoute){}
  ngOnInit() : void {
   this.productService
    .GetProducts()
    .subscribe((result:Product[])=>(this.products = result))
  }
  initNewProduct(){
    this.ProductToEdit = new Product();
  }
  editProduct(product:Product)
  {
     this.ProductToEdit = product;
  }
  updateHeroList(products : Product[]){
    this.products = products;
  }

  deleteProdcut(product: Product) {
    this.productService
      .deleteProduct(product)
      .subscribe((products: Product[]) => this.productUpdate.emit(products));
  }
}
