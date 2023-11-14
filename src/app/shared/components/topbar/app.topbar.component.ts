import {Component, ElementRef, inject, ViewChild} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {LayoutService} from '../layout/services/app.layout.service';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html',
})
export class AppTopBarComponent {
  items!: MenuItem[];
  tieredItems: MenuItem[] = [];
  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;

  private authService = inject(AuthService)

  constructor(public layoutService: LayoutService) {
  }

  async logout() {
    await this.authService.logout()
  }

  ngOnInit() {
    this.tieredItems = [
      {
        label: 'Customers',
        icon: 'pi pi-fw pi-table',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            items: [
              {
                label: 'Customer',
                icon: 'pi pi-fw pi-plus',
              },
              {
                label: 'Duplicate',
                icon: 'pi pi-fw pi-copy',
              },
            ],
          },
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-user-edit',
          },
        ],
      },
      {
        label: 'Orders',
        icon: 'pi pi-fw pi-shopping-cart',
        items: [
          {
            label: 'View',
            icon: 'pi pi-fw pi-list',
          },
          {
            label: 'Search',
            icon: 'pi pi-fw pi-search',
          },
        ],
      },
      {
        label: 'Shipments',
        icon: 'pi pi-fw pi-envelope',
        items: [
          {
            label: 'Tracker',
            icon: 'pi pi-fw pi-compass',
          },
          {
            label: 'Map',
            icon: 'pi pi-fw pi-map-marker',
          },
          {
            label: 'Manage',
            icon: 'pi pi-fw pi-pencil',
          },
        ],
      },
      {
        label: 'Profile',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Settings',
            icon: 'pi pi-fw pi-cog',
          },
          {
            label: 'Billing',
            icon: 'pi pi-fw pi-file',
          },
        ],
      },
      {separator: true},
      {
        label: 'Quit',
        icon: 'pi pi-fw pi-sign-out',
      },
    ];

    this.items = [
      {
        label: 'Customers',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
          },
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-user-edit',
          },
        ],
      },
      {
        label: 'Orders',
        items: [
          {
            label: 'View',
            icon: 'pi pi-fw pi-list',
          },
          {
            label: 'Search',
            icon: 'pi pi-fw pi-search',
          },
        ],
      },
      {
        label: 'Shipments',
        items: [
          {
            label: 'Tracker',
            icon: 'pi pi-fw pi-compass',
          },
          {
            label: 'Map',
            icon: 'pi pi-fw pi-map-marker',
          },
          {
            label: 'Manage',
            icon: 'pi pi-fw pi-pencil',
          },
        ],
      },
    ];
  }
}
