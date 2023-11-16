import {Component, inject,} from '@angular/core';
import {Snackbar} from 'src/app/shared/services/snackbar.service';
import {AuthService} from "../../shared/services/auth.service";
import BaseComponent from "../../shared/components/base/base.component";
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { NgIf, AsyncPipe } from '@angular/common';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DialogModule } from 'primeng/dialog';

interface Company {
  code: string,
  name: string,
}

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [
        DialogModule,
        ProgressSpinnerModule,
        FormsModule,
        InputTextModule,
        PasswordModule,
        NgIf,
        DropdownModule,
        ButtonModule,
        RippleModule,
        AsyncPipe,
    ],
})
export class LoginComponent extends BaseComponent {
  username: string;
  password!: string;
  isValidPassword: boolean = true;
  cities: Company[] = [
    {name: 'Accton', code: 'AC'},
    {name: 'ATVN', code: 'VN'},
    {name: 'JoyTech', code: 'JT'}
  ];
  selectedCity: Company
  private authService = inject(AuthService)
  private snackBar = inject(Snackbar)

  async handleLogin() {
    this.isValidPassword = true;

    if (!this.username || !this.password) {
      this.snackBar.showError('Username or password is invalid');
      return;
    }

    if (this.password?.length < 8) {
      this.snackBar.showError('Password is invalid');
      this.isValidPassword = false;
      return;
    }

    try {
      this.showLoading(true)
      const res = await this.apiService.login({
        user_name: this.username,
        password: btoa(this.password),
        company: this.selectedCity.code
      })

      if (res.code === 200) {
        this.snackBar.showSuccess(res.message)
        await this.authService.login(res.data)
      } else {
        this.snackBar.showError(res.message)
      }
    } catch (e) {
      console.log(e)
      // show error
    } finally {
      this.showLoading(false)
    }
  }
}
