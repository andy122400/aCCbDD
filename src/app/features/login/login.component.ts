import {Component, inject,} from '@angular/core';
import {Snackbar} from 'src/app/shared/services/snackbar.service';
import {AuthService} from "../../shared/services/auth.service";

export interface LoginRequest {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string;
  password!: string;
  isValidPassword: boolean = true;
  private authService = inject(AuthService)
  private snackBar = inject(Snackbar)

  async handleLogin(request: LoginRequest) {
    this.isValidPassword = true;

    if (!request.username || !request.password) {
      this.snackBar.showError('Username or password is invalid');
      return;
    }

    if (request.password?.length < 8) {
      this.snackBar.showError('Password is invalid');
      this.isValidPassword = false;
      return;
    }

    await this.authService.login({
      username: request.username,
      access_token: btoa(request.password)
    })
  }
}
