import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { AuthService } from './app/services/auth.service';

import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';

registerLocaleData(localeDe);

const authService = new AuthService();

// ⚠️ Routingni faqat auth state aniqlangach boshlaymiz
authService.init().then(() => {
  bootstrapApplication(AppComponent, {
    ...appConfig,
    providers: [
      ...appConfig.providers!,
      { provide: AuthService, useValue: authService } // instance'ni qayta ishlatamiz
    ]
  });
});
