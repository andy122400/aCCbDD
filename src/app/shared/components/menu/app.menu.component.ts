import {OnInit} from '@angular/core';
import {Component} from '@angular/core';
import {LayoutService} from '../layout/services/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) {
    }

    ngOnInit() {
        this.model = [
            {
                label: 'Agile',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Auth',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Login',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/login']
                            },
                            {
                                label: 'Error',
                                icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['/error']
                            },
                            {
                                label: 'Access Denied',
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/unauthorized']
                            }
                        ]
                    },

                    {
                        label: 'Formlayout',
                        icon: 'pi pi-fw pi-circle-off',
                        routerLink: ['/pages/empty']
                    },
                ]
            },
        ];
    }
}
