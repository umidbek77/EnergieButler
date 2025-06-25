import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls:['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  loginWithGoogle() {
    this.authService.loginWithGoogle()
      .then(result => {
        console.log('Logged in user:', result.user);
        this.router.navigate(['/']);
      })
      .catch(error => {
        console.error('Login failed:', error.message);
      });
  }
}
