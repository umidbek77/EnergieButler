import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports:[CommonModule, FormsModule]
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  loginWithGoogle() {
    this.authService.loginWithGoogle()
      .then(result => {
        this.router.navigate(['/']);
      })
      .catch(error => {
        console.error('Google login error:', error);
      });
  }

  loginWithEmail() {
    this.authService.loginWithEmail(this.email, this.password)
      .then(result => {
        this.router.navigate(['/']);
      })
      .catch(error => {
        console.error('Email login error:', error.message);
        alert('Login fehlgeschlagen: ' + error.message); // xatolikni ko'rsatish
      });
  }
}
