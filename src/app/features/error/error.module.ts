import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error.component';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [CommonModule, ButtonModule, RouterModule],
    declarations: [ErrorComponent],
})
export class ErrorModule {}
