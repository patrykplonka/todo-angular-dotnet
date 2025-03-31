import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http'; // Dodano dla HttpClient

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()] // Zapewnia HttpClient w aplikacji standalone
})
  .catch(err => console.error(err));
