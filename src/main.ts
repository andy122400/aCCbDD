import {enableProdMode, importProvidersFrom} from '@angular/core';

import {environment} from './environments/environment';
import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {ScrollTopModule} from 'primeng/scrolltop';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {RippleModule} from 'primeng/ripple';
import {ButtonModule} from 'primeng/button';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {provideAnimations} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app/app-routing.module';
import {CommonModule, LocationStrategy, PathLocationStrategy} from '@angular/common';
import AppStore from "./app/shared/store/app-store";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      AppStore,
      ButtonModule,
      RippleModule,
      InputTextModule,
      TableModule,
      ScrollTopModule,
      MatSnackBarModule,
    ),
    {provide: LocationStrategy, useClass: PathLocationStrategy},
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
  ]
})
  .catch(err => console.error(err));
