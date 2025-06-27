import { Injectable } from '@angular/core';
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  FacebookAuthProvider,
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
    registerWithEmail(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // 🔹 2. Email orqali login qilish
  loginWithEmail(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
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

init(): Promise<void> {
  return new Promise(resolve => {
    onAuthStateChanged(auth, user => {
      this.userSubject.next(user);
      resolve(); 
    });
  });
}

loginWithFacebook() {
  const provider = new FacebookAuthProvider();
  return signInWithPopup(auth, provider);
}

getDisplayName(): string | null {
  return this.userSubject.value?.displayName || null;
}


}
