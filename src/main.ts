import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations'; // ✅ Qo‘shish kerak

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { AuthService } from './app/services/auth.service';

const authService = new AuthService();

authService.init().then(() => {
  bootstrapApplication(AppComponent, {
    ...appConfig,
    providers: [
      ...appConfig.providers!,
      provideAnimations(), // ✅ bu yerda animatsiyalarni qo‘shamiz
      { provide: AuthService, useValue: authService }
    ]
  });
});
