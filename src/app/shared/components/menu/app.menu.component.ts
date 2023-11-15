import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from '../layout/services/app.layout.service';
import { Store } from '@ngrx/store';
import { changeScreen } from '../../store/global/global.actions';
import { Observable } from 'rxjs';
import { InitGlobalState } from '../../store/global/global.reducer';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
    styleUrls: ['./app.menu.component.scss'],
})
export class AppMenuComponent implements OnInit {
    model: any[] = [];

    adminTaps: any[] = [];

    activeTab: string = 'Admin';

    optionsByTab: any[] = [];

    globalStore$: Observable<InitGlobalState>;

    constructor(public layoutService: LayoutService, 
        private store: Store) {
        }

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

        this.adminTaps = [
            {
                id: 1,
                label: 'Search',
                command: () => {this.handleChangeScreen('')}
            },
            {
                id: 2,
                label: 'Analytics and Reports',
                command: () => {this.handleChangeScreen('')}
            },
            {
                id: 3,
                label: 'Admin',
                items: [
                    {
                        id: 1, 
                        label: 'Data Settings', 
                     
                        items: [
                            {id: 1, label: 'Class', command: () => {this.handleChangeScreen('Class')}},
                            {id: 2, label: 'Character Sets', command: () => {this.handleChangeScreen('Character Sets')}},
                            {id: 3, label: 'Lists', command: () => {this.handleChangeScreen('Lists')}},
                            {id: 4, label: 'Process Extensions', command: () => {this.handleChangeScreen('Process Extensions')}},
                            {id: 5, label: 'AutoNumbers', command: () => {this.handleChangeScreen('AutoNumbers')}},
                            {id: 6, label: 'Criteria', command: () => {this.handleChangeScreen('Criteria')}}
                        ]
                    },
                    {
                        id: 2, 
                        label: 'Workflow Settings', 
                        items: [
                            {id: 1, label: 'workflow', command: () => {this.handleChangeScreen('workflow')}},
                        ]
                    },
                    { 
                        id: 3, 
                        label: 'User Settings',
                        items: [
                            {id: 1, label: 'Account Policy', command: () => {this.handleChangeScreen('Account Policy')}},
                            {id: 2, label: 'Users', command: () => {this.handleChangeScreen('Users')}},
                            {id: 3, label: 'User Groups', command: () => {this.handleChangeScreen('User Groups')}},
                            {id: 4, label: 'Supplier Groups', command: () => {this.handleChangeScreen('Supplier Groups')}},
                            {id: 5, label: 'Roles', command: () => {this.handleChangeScreen('Roles')}},
                            {id: 6, label: 'Privileges', command: () => {this.handleChangeScreen('Privileges')}},
                            {id: 7, label: 'User Monitor', command: () => {this.handleChangeScreen('User Monitor')}},
                            {id: 8, label: 'Delete Users', command: () => {this.handleChangeScreen('Delete Users')}},
                            {id: 9, label: 'Delete User Groups', command: () => {this.handleChangeScreen('Delete User Groups')}}
                        ]
                    },
                    { 
                        id: 4, 
                        label: 'System Settings',
                        items: [
                            {id: 1, label: 'SmartRules', command: () => {this.handleChangeScreen('SmartRules')}},
                            {id: 2, label: 'Viewers & Files', command: () => {this.handleChangeScreen('Viewers & Files')}},
                            {id: 3, label: 'Notification', command: () => {this.handleChangeScreen('Notification')}},
                            {id: 4, label: 'Full Text Search', command: () => {this.handleChangeScreen('Full Text Search')}},
                            {id: 5, label: 'My Assignments', command: () => {this.handleChangeScreen('My Assignments')}},
                            {id: 6, label: 'UOM', command: () => {this.handleChangeScreen('UOM')}},
                            {id: 7, label: 'Company Profile', command: () => {this.handleChangeScreen('Company Profile')}},
                            {id: 8, label: 'Current Exchange Rates', command: () => {this.handleChangeScreen('Current Exchange Rates')}},
                            {id: 9, label: 'Dashboard Management', command: () => {this.handleChangeScreen('Dashboard Management')}},
                            {id: 10, label: 'Product Portfolio Management', command: () => {this.handleChangeScreen('Product Portfolio Management')}},
                            {id: 11, label: 'Agile Content Service', command: () => {this.handleChangeScreen('Agile Content Service')}},
                            {id: 12, label: 'Event Management', command: () => {this.handleChangeScreen('Event Management')}}
                        ]
                    },
                    {
                        id : 5, 
                        label: 'Server Settings',
                        items: [
                            {id: 1, label: 'Locations', command: () => {this.handleChangeScreen('Locations')}},
                            {id: 2, label: 'Database', command: () => {this.handleChangeScreen('Database')}},
                            {id: 3, label: 'LDAP', command: () => {this.handleChangeScreen('LDAP')}},
                            {id: 4, label: 'Preferences', command: () => {this.handleChangeScreen('Preferences')}},
                            {id: 5, label: 'Licenses', command: () => {this.handleChangeScreen('Licenses')}},
                            {id: 6, label: 'Task Monitor', command: () => {this.handleChangeScreen('Task Monitor')}},
                            {id: 7, label: 'Task Configuration', command: () => {this.handleChangeScreen('Task Configuration')}}
                        ]},
                    {
                        id: 6, 
                        label: 'Examples',
                        items: [
                            {id: 1, label: 'Example Roles', command: () => {this.handleChangeScreen('Example Roles')}},
                            {id: 2, label: 'Example Privileges', command: () => {this.handleChangeScreen('Example Privileges')}},
                            {id: 3, label: 'Example Criteria', command: () => {this.handleChangeScreen('Example Criteria')}}
                        ]
                    },
                ]
            }
        ]
        this.optionsByTab = this.adminTaps.find(tab => tab.label === this.activeTab)?.items || [];
    }

    handleChangeScreen (value : string) {
        this.store.dispatch(changeScreen({isScreen: value}));
    }

    handleChangeTab(value: string) {
        this.activeTab = value;
        this.optionsByTab = this.adminTaps.find(tab => tab.label === value)?.items || [];
    }
}
