import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProductDetails } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productDetails: IProductDetails[];
  // public productDetails: IProductDetails[] = []; // Bad pratice: Should avoid initializing the array outside the constructor
  constructor(public productService: ProductService, public router: Router, public route: ActivatedRoute) {
    this.productDetails = [];
  }

  ngOnInit(): void {
    /* this.productService.getProducts().subscribe(
      // (data) => {
      (data: IProductDetails[]) => {
        this.productDetails = data;
        console.log('productDetails:', data)
      }
    ) */
    this.productDetails = this.route.snapshot.data['products1'];
  }

  public navigateToProductInfo(product: IProductDetails) {
    // route params are mandatory
    // /user/:id --> /user/1
    this.router.navigate(['product-info', product.productId,
      product.productName, product.productImage, product.productDescription], { skipLocationChange: true });
  }

  public navigateToProductDetails(product: IProductDetails) {
    // query params are optional
    // /user?age=23
    this.router.navigate(['product-details'], {
      queryParams: {
        productId: product.productId,
        productName: product.productName,
        productDescription: product.productDescription,
        productPrice: product.productPrice,
        productImage: product.productImage
      }, skipLocationChange: true
    });
  }
}
