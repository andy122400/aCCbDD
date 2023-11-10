import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RippleModule } from 'primeng/ripple';
import { AppMenuComponent } from '../menu/app.menu.component';
import { AppMenuitemComponent } from '../menu/components/app.menuitem.component';
import { RouterModule } from '@angular/router';
import { AppTopBarComponent } from '../topbar/app.topbar.component';
import { AppSidebarComponent } from '../sidebar/app.sidebar.component';
import { AppLayoutComponent } from './app.layout.component';
import { TestComponent } from 'src/app/features/test/test.component';
import { BaseInputTextComponent } from '../commons/base-input-text/base-input-text.component';
import { DropdownModule } from 'primeng/dropdown';
import { BaseDropdownComponent } from '../commons/base-dropdown/base-dropdown.component';
import { BaseTextAreaComponent } from '../commons/base-text-area/base-text-area.component';
import { BaseInputNumberComponent } from '../commons/base-input-number/base-input-number.component';

@NgModule({
    declarations: [
        AppMenuitemComponent,
        AppTopBarComponent,
        AppMenuComponent,
        AppSidebarComponent,
        AppLayoutComponent,
        TestComponent,
        BaseInputTextComponent,
        BaseDropdownComponent,
        BaseTextAreaComponent,
        BaseInputNumberComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        InputTextModule,
        SidebarModule,
        BadgeModule,
        RadioButtonModule,
        InputSwitchModule,
        RippleModule,
        RouterModule,
        DropdownModule,
        InputNumberModule 
    ],
    exports: [AppLayoutComponent],
})
export class AppLayoutModule {}
