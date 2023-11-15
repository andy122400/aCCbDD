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
import { AppLayoutModule } from './shared/components/layout/app.layout.module';
import AppStore from './shared/store/app-store';
import { LayoutMainModule } from './features/layout-main/layout-main.module';
import { BaseTableComponent } from './shared/components/commons/base-table/base-table.component';
import {TableComponent} from "./shared/components/table/table.component";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {InputTextModule} from "primeng/inputtext";
import {TableModule} from "primeng/table";
import {ScrollTopModule} from "primeng/scrolltop";
@NgModule({
  declarations: [
    AppComponent,
    // // Add the custom directive to the declarations array
    HighlightDirective,
    BaseTableComponent,
    TableComponent,
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
    LayoutMainModule,
    AppStore,
    ButtonModule,
    RippleModule,
    InputTextModule,
    TableModule,
    ScrollTopModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: PathLocationStrategy},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
