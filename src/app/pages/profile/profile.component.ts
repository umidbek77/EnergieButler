import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from 'firebase/auth';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Firestore, doc, getDoc, setDoc } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { BaseInputNameComponent } from '../../base-components/base-input-name/base-input.component';
import { BaseInputNumberComponent } from '../../base-components/base-input-number/base-input-number.component';
import { BaseInputTextComponent } from '../../base-components/base-input-text/base-input-text.component';

import { Select } from 'primeng/select';
import { FloatLabel } from 'primeng/floatlabel';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

interface Anrede {
  name: string;
}
interface Titel {
  name: string;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    Select,
    FloatLabel,
    BaseInputNameComponent,
    BaseInputNumberComponent,
    BaseInputTextComponent,
    ToastModule 
  ],
    providers: [MessageService]
})
export class ProfileComponent implements OnInit {
  user: User | null = null;
  profileForm!: FormGroup;

  andrede: Anrede[] = [
    { name: 'Herr' },
    { name: 'Frau' }
  ];

  titel: Titel[] = [
    { name: 'Dr.' },
    { name: 'Prof.' }
  ];

  days = Array.from({ length: 31 }, (_, i) => ({
    label: `${i + 1}`,
    value: i + 1
  }));

  monate = [
    { label: 'Januar', value: 1 },
    { label: 'Februar', value: 2 },
    { label: 'März', value: 3 },
    { label: 'April', value: 4 },
    { label: 'Mai', value: 5 },
    { label: 'Juni', value: 6 },
    { label: 'Juli', value: 7 },
    { label: 'August', value: 8 },
    { label: 'September', value: 9 },
    { label: 'Oktober', value: 10 },
    { label: 'November', value: 11 },
    { label: 'Dezember', value: 12 }
  ];

  jahre: { label: string; value: number }[] = [];

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private firestore: Firestore,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    this.jahre = Array.from({ length: 100 }, (_, i) => {
      const year = currentYear - i;
      return { label: `${year}`, value: year };
    });

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

      // Fetch and patch existing user data
      if (user) {
        const userDocRef = doc(this.firestore, `users/${user.uid}`);
        const userSnap = await getDoc(userDocRef);
        if (userSnap.exists()) {
          this.profileForm.patchValue(userSnap.data());
        }
      }

      // Watch for changes to monat and jahr to update tag days
      this.profileForm.get('geburtstag.monat')?.valueChanges.subscribe((month: number) => {
        const year = this.profileForm.get('geburtstag.jahr')?.value;
        this.updateDays(month, year);
      });

      this.profileForm.get('geburtstag.jahr')?.valueChanges.subscribe((year: number) => {
        const month = this.profileForm.get('geburtstag.monat')?.value;
        this.updateDays(month, year);
      });
    });
  }

  updateDays(selectedMonth: number, selectedYear: number): void {
    let daysInMonth = 31;

    if (selectedMonth === 2) {
      // Februar: check leap year
      daysInMonth =
        selectedYear % 4 === 0 &&
        (selectedYear % 100 !== 0 || selectedYear % 400 === 0)
          ? 29
          : 28;
    } else if ([4, 6, 9, 11].includes(selectedMonth)) {
      daysInMonth = 30;
    }

    this.days = Array.from({ length: daysInMonth }, (_, i) => ({
      label: `${i + 1}`,
      value: i + 1
    }));

    const currentDay = this.profileForm.get('geburtstag.tag')?.value;
    if (currentDay > daysInMonth) {
      this.profileForm.get('geburtstag.tag')?.setValue(null);
    }
  }

  async speichern() {
  if (this.user) {
    const userDocRef = doc(this.firestore, `users/${this.user.uid}`);
    const data = this.profileForm.getRawValue();
    await setDoc(userDocRef, data, { merge: true });

    this.messageService.add({
      severity: 'success',
      summary: 'Erfolgreich',
      detail: 'Profil erfolgreich gespeichert.',
      life: 3000 // toast 3 sekunddan so'ng yo‘qoladi
    });
  }
}


  logout(): void {
    this.authService.logout().then(() => {
      this.router.navigate(['/']);
    });
  }
}
