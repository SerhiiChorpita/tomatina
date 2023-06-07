import { Component } from '@angular/core';
import { IProductResponse } from 'src/app/shared/interface/products/products';
import { ProductService } from 'src/app/shared/services/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  public productStorage: Array<IProductResponse> = [];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.loadProduct()
  }

  loadProduct() {
    this.productService.getAllFirebase().subscribe(data => {
      this.productStorage = data as IProductResponse[];
    })
  }
}
