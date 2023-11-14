import {Component, inject,} from '@angular/core';
import {Snackbar} from 'src/app/shared/services/snackbar.service';
import {AuthService} from "../../shared/services/auth.service";
import BaseComponent from "../../shared/components/base/base.component";
import {sleep} from "../../shared/utils/utility";

interface Company {
  code: string,
  name: string,
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
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
      await sleep(2000)
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
