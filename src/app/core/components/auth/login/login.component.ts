import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {

    valCheck: string[] = ['remember'];

    password!: string;
    SS:string;
    selectedOption: string; // 用于存储用户选择的选项
    dropdownOptions: any[]; // 下拉选项的数组

    cities: any [];

    selectedCity: string ;
    constructor(public layoutService: LayoutService) {

}
ngOnInit() {
    this.cities = [
        { name: 'Accton', code: 'AC' },
        { name: 'ATVN', code: 'VN' },
        { name: 'JoyTech', code: 'JT' }
    ];
}

}

