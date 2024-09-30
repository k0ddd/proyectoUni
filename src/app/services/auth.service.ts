import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedUser: boolean = false;

  constructor() { }

  isAuthenticated(): boolean{
    return this.isAuthenticatedUser;
  }

  login(){
    this.isAuthenticatedUser = true;
  }

  logout() {
    this.isAuthenticatedUser = false;
  }

}
