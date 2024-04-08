import { Component, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/productService';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements OnInit {
  @Input() product?: Product;
  @Output() productUpdate = new EventEmitter<Product[]>();

  constructor (private productService : ProductService){

  }
  ngOnInit(): void {
   
  }
  updateproduct(product: Product){
    this.productService 
      .updateProduct(product)
      .subscribe((products : Product[]) => this.productUpdate.emit(products));
  }
  createProduct(product: Product) {
    this.productService
      .createHero(product)
      .subscribe((heroes: Product[]) => this.productUpdate.emit(heroes));
  }
}
