import { Component } from '@angular/core';
import { Product } from './models/product';
import { ProductService } from './services/productService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Product-Catalog.UI';
  products  : Product[] = [] ;
  ProductToEdit?: Product;

  constructor(private productService: ProductService){}
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
}
