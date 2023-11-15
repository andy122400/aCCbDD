import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {FormsModule} from '@angular/forms';
import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {RouterModule} from '@angular/router';
import {RippleModule} from "primeng/ripple";
import {DialogModule} from "primeng/dialog";
import {ProgressSpinnerModule} from "primeng/progressspinner";

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    DropdownModule,
    RouterModule,
    RippleModule,
    DialogModule,
    ProgressSpinnerModule,
  ],
  declarations: [LoginComponent],
})
export class LoginModule {
}
