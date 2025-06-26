import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, FormsModule],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  loginWithGoogle() {
    this.authService
      .loginWithGoogle()
      .then((result) => {
        const user = result.user;
        if (user) {
          localStorage.setItem(
            'user',
            JSON.stringify({
              uid: user.uid,
              displayName: user.displayName,
              email: user.email,
              photoURL: user.photoURL,
            })
          );
          console.log('Logged in user:', user);
          this.router.navigate(['/']);
        }
      })
      .catch((error) => {
        console.error('Login failed:', error.message);
      });
  }

  loginWithEmail() {
    this.authService
      .loginWithEmail(this.email, this.password)
      .then((result) => {
        this.router.navigate(['/']);
      })
      .catch((error) => {
        console.error('Email login error:', error.message);
        alert('Login fehlgeschlagen: ' + error.message);
      });
  }

  loginWithFacebook() {
    this.authService
      .loginWithFacebook()
      .then((res) => {
        console.log('Facebook bilan login:', res.user);
        this.router.navigate(['/']);
      })
      .catch((err) => {
        console.error('Xatolik:', err.message);
        alert('Login xatoligi: ' + err.message);
      });
  }
}
