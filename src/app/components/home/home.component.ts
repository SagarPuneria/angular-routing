import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  public goToProducts(): boolean {
    // this.router.navigate(['products'])
    // this.router.navigateByUrl('products')
    return true;
  }

  public canDeactivate(): boolean {
    if (this.goToProducts()) {
      // return window.confirm('Are you sure you want to navigate away from this page?');
      return window.confirm('you have not performed navigation');
    } else {
      return true;
    }
  }

}
