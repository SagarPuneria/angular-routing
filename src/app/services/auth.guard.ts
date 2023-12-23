import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from './product.service';
import { AuthService } from './auth.service';
import { IProductDetails } from '../models/product.model';

export interface canComponentDeactivate {
  canDeactivate: () => boolean;
}

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown> {
  constructor(public authService: AuthService, public router: Router, private productsService: ProductService) {

  }
  canActivate(
    /* route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree { 
      return true;
    }*/
    nextRoute: ActivatedRouteSnapshot,
    stateOfRoute: RouterStateSnapshot): boolean {
    if (this.authService.isRouteAuthenticated()) {
      return true;
    } else {
      this.router.navigate(["/home"]);
      return false;
    }
  }
  canActivateChild(
    /* childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true; */
    nextRoute: ActivatedRouteSnapshot,
    stateOfRoute: RouterStateSnapshot): boolean {
    if (this.authService.isRouteAuthenticated()) {
      return true;
    } else {
      this.router.navigate(["/home"]);
      return false;
    }
  }
  /* canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  } */

  canDeactivate(component: canComponentDeactivate): boolean {
    return component.canDeactivate ? component.canDeactivate() : true;
  }

  resolve(): Observable<IProductDetails[]> {
    return this.productsService.getProducts();
  }

}
