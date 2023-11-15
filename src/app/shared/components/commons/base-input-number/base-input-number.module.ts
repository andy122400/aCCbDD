import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BaseInputNumberComponent } from './base-input-number.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        InputNumberModule,
        FormsModule
    ],
    declarations: [BaseInputNumberComponent
        ],
    exports: [BaseInputNumberComponent]
})
export class BaseInputNumberModule { }