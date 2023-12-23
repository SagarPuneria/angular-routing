import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAthenticated: boolean;
  constructor() {
    this.isAthenticated = true;
  }
  public isRouteAuthenticated(): boolean {
    // currently simple boolean value is paased from service layer
    // we can make api call and attach response in this
    return this.isAthenticated;
  }
  public setIsAuthenticated(isAuth: boolean): void {
    this.isAthenticated = isAuth;
  }
}
