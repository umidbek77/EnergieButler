import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from 'firebase/auth';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Firestore, doc, getDoc, setDoc } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  imports:[ReactiveFormsModule, CommonModule]
})
export class ProfileComponent implements OnInit {
  user: User | null = null;
  profileForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private firestore: Firestore
  ) {}

  ngOnInit(): void {
    this.authService.user$.subscribe(async (user) => {
      this.user = user;

      this.profileForm = this.fb.group({
        anrede: [''],
        titel: [''],
        vorname: ['', Validators.required],
        nachname: ['', Validators.required],
        plz: [''],
        ort: [''],
        strasse: [''],
        hausnummer: [''],
       email: [{ value: user?.email || '', disabled: true }],
        telefon: [''],
        geburtstag: this.fb.group({
          tag: [''],
          monat: [''],
          jahr: ['']
        })
      });

      if (user) {
        const userDocRef = doc(this.firestore, `users/${user.uid}`);
        const userSnap = await getDoc(userDocRef);
        if (userSnap.exists()) {
          this.profileForm.patchValue(userSnap.data());
        }
      }
    });
  }

  async speichern() {
    if (this.user) {
      const userDocRef = doc(this.firestore, `users/${this.user.uid}`);
      const data = this.profileForm.getRawValue();
      await setDoc(userDocRef, data, { merge: true });
      alert('Profil muvaffaqiyatli saqlandi.');
    }
  }

  logout(): void {
    this.authService.logout().then(() => {
      this.router.navigate(['/']);
    });
  }
}
