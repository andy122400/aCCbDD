import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { AccessComponent } from './access.component';

@NgModule({
    imports: [
        CommonModule,
        ButtonModule
    ],
    declarations: [AccessComponent]
})
export class AccessModule { }
