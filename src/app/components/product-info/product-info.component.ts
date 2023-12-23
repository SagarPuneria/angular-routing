import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProductDetails } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  public productDetails: IProductDetails;
  public params: any;
  constructor(private activateRoute: ActivatedRoute) {
    this.productDetails = {} as IProductDetails;
    this.params = {};
  }
  ngOnInit(): void {
    // non observable way(Synchronous execution)
    this.params = this.activateRoute.snapshot.params;
    console.log('non observable way this.activateRoute.snapshot.params:', this.params)

    // observable way(Asynchronous execution)
    this.activateRoute.paramMap.subscribe((params: any) => {
      console.log('observable way this.activateRoute.paramMap', params);
      this.productDetails.productId = params.get('id');
      this.productDetails.productName = params.get('name');
      this.productDetails.productImage = params.get('image');
      this.productDetails.productDescription = params.get('description');
    })
  }

}
