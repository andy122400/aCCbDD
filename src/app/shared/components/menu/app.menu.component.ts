import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from '../layout/services/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
    styleUrls: ['./app.menu.component.scss'],
})
export class AppMenuComponent implements OnInit {
    model: any[] = [];

    constructor(public layoutService: LayoutService) {}

    ngOnInit() {
        this.model = [
            {
                label: 'Profile',
                icon: 'pi pi-fw pi-user',
                routerLink: ['/login'],
            },
            {
                label: 'Setting',
                icon: 'pi pi-fw pi-cog',
                routerLink: ['/setting'],
            },
            {
                label: 'Help',
                icon: 'pi pi-fw pi-question',
                routerLink: ['/help'],
            },
            {
                label: 'Logout',
                icon: 'pi pi-fw pi-power-off',
                routerLink: ['/logout'],
            },
        ];
    }
}
