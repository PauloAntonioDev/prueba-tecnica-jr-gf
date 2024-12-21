import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.authService.login(username, password).subscribe(
        response => {
          console.log('Login successful', response);
          localStorage.setItem('token', response.accessToken); // Guarda el token
          localStorage.setItem('user', JSON.stringify(response)); // Guarda la información del usuario
          this.router.navigate(['/user-profile']); // Redirige a la pantalla del perfil del usuario
        },
        error => {
          console.error('Login failed', error);
          this.errorMessage = 'Credenciales inválidas. Inténtalo de nuevo.'; // Mensaje de error
        }
      );
    }
  }
}
