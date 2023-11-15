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
import { DropdownModule } from 'primeng/dropdown';
import { SplitterModule } from 'primeng/splitter';
import { PanelMenuModule } from 'primeng/panelmenu';
import { LayoutMainModule } from 'src/app/features/layout-main/layout-main.module';

@NgModule({
    declarations: [
        AppMenuitemComponent,
        AppTopBarComponent,
        AppMenuComponent,
        AppSidebarComponent,
        AppLayoutComponent,
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
        FormsModule,
        InputNumberModule,
        SplitterModule,
        PanelMenuModule,
        LayoutMainModule
    ],
    exports: [AppLayoutComponent],
})
export class AppLayoutModule {}
