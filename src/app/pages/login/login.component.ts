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
      const user = result.user;
      if (user) {
        // Foydalanuvchi ma'lumotlarini localStorage-ga saqlash
        localStorage.setItem('user', JSON.stringify({
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL
        }));
        console.log('Logged in user:', user);
        this.router.navigate(['/']);
      }
    })
    .catch(error => {
      console.error('Login failed:', error.message);
    });
}

}
