import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/shared/components/layout/services/app.layout.service';
import { Snackbar } from 'src/app/shared/services/snackbar.service';
import { UserService } from 'src/app/shared/services/user-service.service';

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

    isValidPassword: boolean;

    constructor(
        public layoutService: LayoutService,
        private snackBar: Snackbar,
        private userService: UserService,
    ) {
        this.isValidPassword = true;
    }

    handleLogin(request: LoginRequest) {
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
        // const options = {
        //     url: 'http://localhost:8080/api/login',
        //     method: 'POST',
        //     data: JSON.stringify(request),
        // };
        // this.userService.handleLogin(options);
        // this.handleCallback();
        sessionStorage.setItem('token', JSON.stringify({username: 'admin', password: 'admin'}))
    }

    ngOnInit() {}
}
