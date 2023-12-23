import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProductDetails } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public productDetails: IProductDetails;
  public queryparams: any;
  constructor(private activateRoute: ActivatedRoute) {
    this.productDetails = {} as IProductDetails;
    this.queryparams = {}
  }

  ngOnInit(): void {
    // non observable way(Synchronous execution)
    this.queryparams = this.activateRoute.snapshot.queryParams
    console.log('non observable way this.activateRoute.snapshot.params:', this.queryparams)

    // observable way(Asynchronous execution)
    this.activateRoute.queryParamMap.subscribe((queryParams: any) => {
      console.log('observable way this.activateRoute.queryParamMap', queryParams);
      this.productDetails.productId = queryParams.get('productId');
      this.productDetails.productName = queryParams.get('productName');
      this.productDetails.productDescription = queryParams.get('productDescription');
      this.productDetails.productImage = queryParams.get('productImage');
      this.productDetails.productPrice = queryParams.get('productPrice');
    })
  }

}
