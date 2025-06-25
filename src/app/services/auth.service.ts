import { Injectable } from '@angular/core';
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  User,
} from 'firebase/auth';
import { BehaviorSubject } from 'rxjs';
import { auth } from '../../firebase.init'; // 👈 initializeApp() bilan yaratilgan auth obyekt

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userSubject = new BehaviorSubject<User | null>(null);
  public user$ = this.userSubject.asObservable();

  constructor() {
    onAuthStateChanged(auth, (user: User | null) => {
      this.userSubject.next(user);
    });
  }

  loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }

  logout() {
    return signOut(auth);
  }

  get currentUser(): User | null {
    return auth.currentUser;
  }
}
