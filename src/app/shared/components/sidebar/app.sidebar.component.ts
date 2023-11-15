import { Component, ElementRef } from '@angular/core';
import { LayoutService } from '../layout/services/app.layout.service';
import { AppMenuComponent } from '../menu/app.menu.component';

@Component({
    selector: 'app-sidebar',
    templateUrl: './app.sidebar.component.html',
    standalone: true,
    imports: [AppMenuComponent],
})
export class AppSidebarComponent {
    constructor(
        public layoutService: LayoutService,
        public el: ElementRef,
    ) {}
}
