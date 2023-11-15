import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { BaseDropdownComponent } from './base-dropdown.component';

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        DropdownModule
    ],
    declarations: [
        BaseDropdownComponent
        ],
    exports: [BaseDropdownComponent]
})
export class BaseDropdownModule { }