import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CanActivateFn, CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate{

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()){
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }
  }

}

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };
