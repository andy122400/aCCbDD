import { NgModule } from '@angular/core';
import {
    CommonModule,
    LocationStrategy,
    PathLocationStrategy,
} from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from './features/login/login.module';
import { AccessModule } from './features/unauthorized/access.module';
import { ErrorModule } from './features/error/error.module';
import { HighlightDirective } from './shared/directives/highlight.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './shared/services/user-service.service';
import { BaseService } from './shared/services/base-service.service';
import { AppLayoutModule } from './shared/components/layout/app.layout.module';
import { BaseInputNumberComponent } from './shared/components/commons/base-input-number/base-input-number.component';
import { UserMainLayoutComponent } from './features/user-site/user-main-layout/user-main-layout.component';
import { AdminMainLayoutComponent } from './features/admin-site/admin-main-layout/admin-main-layout.component';

@NgModule({
    declarations: [
        AppComponent,
        // // Add the custom directive to the declarations array
        HighlightDirective,
        UserMainLayoutComponent,
        AdminMainLayoutComponent,
    ],
    imports: [
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        LoginModule,
        AccessModule,
        ErrorModule,
        BrowserAnimationsModule,
        MaterialModule,
        HttpClientModule,
        AppLayoutModule,
    ],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
