import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const isLoggedIn = !!localStorage.getItem('token'); // Verifica si hay un token almacenado
    if (!isLoggedIn) {
      this.router.navigate(['/login']); // Redirige a la página de login si no está autenticado
    }
    return isLoggedIn;
  }
}
