import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { AccessComponent } from './access.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [CommonModule, ButtonModule, RouterModule],
    declarations: [AccessComponent],
})
export class AccessModule {}
