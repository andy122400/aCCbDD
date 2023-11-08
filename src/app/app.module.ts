import { NgModule } from '@angular/core';
import {CommonModule, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './shared/components/layout/app.layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {LoginModule} from "./features/login/login.module";
import {AccessModule} from "./features/unauthorized/access.module";
import {ErrorModule} from "./features/error/error.module";
import {HighlightDirective} from "./shared/directives/highlight.directive";

@NgModule({
    declarations: [
        AppComponent,
        // Add the custom directive to the declarations array
        HighlightDirective
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        LoginModule,
        AccessModule,
        ErrorModule,
    ],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
