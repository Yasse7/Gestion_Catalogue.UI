import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements OnInit {
  @Input() product? : Product;

  constructor (){

  }
  ngOnInit(): void {
   
  }
  updateproduct(product:Product){

  }
}
