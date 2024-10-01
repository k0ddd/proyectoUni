import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedUser: boolean = false;
  private userEmail: string='';
  private apiURL = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }
  getUsers(): Observable<any>{
    return this.http.get(this.apiURL);
  }

  login(email: string, password: string): Observable<any> {
    return new Observable(observer => {
      this.getUsers().subscribe((data: any) => {
        const user = data.users.find((u: any) => u.email === email && u.password === password);
        if (user) {
          this.isAuthenticatedUser = true;
          this.userEmail = email;
          observer.next(user);
          observer.complete();
        }else{
          observer.error('Usuario o contraseña incorrectos');
        }
      });
    });
  }

  logout() {
    this.isAuthenticatedUser = false;
    this.userEmail='';
  }

  isAuthenticated(): boolean{
    return this.isAuthenticatedUser;
  }

  getUserEmail(): string{
    return this.userEmail;
  }

}
