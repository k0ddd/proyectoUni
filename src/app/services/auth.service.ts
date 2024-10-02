import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedUser: boolean = false;
  private userEmail: string = '';
  private userRole: string = '';

  constructor() { 
    const storedEmail = localStorage.getItem('userEmail');
    const storedRole = localStorage.getItem('userRole');
    if (storedEmail && storedRole){
      this.isAuthenticatedUser=true;
      this.userEmail=storedEmail;
      this.userRole=storedRole;
  }
}

  isAuthenticated(): boolean{
    return this.isAuthenticatedUser;
  }
  
  getUserEmail(): string{
    return this.userEmail;
  }

  getUserRole(): string{
    return this.userRole
  }

  login(email: string, role: string){
    this.isAuthenticatedUser = true;
    this.userEmail = email;
    this.userRole = role;

    localStorage.setItem('userEmail', email);
    localStorage.setItem('userRole', role);    
  }

  logout() {
    this.isAuthenticatedUser = false;
    this.userEmail = '';
    this.userRole = '';

    localStorage.removeItem('userEmail');
    localStorage.removeItem('userRole');    

  }

}
