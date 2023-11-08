import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error.component';
import { ButtonModule } from 'primeng/button';
import { AcctonCommonModule } from '../../shared/components/accton-common/accton-common.module';

@NgModule({
    imports: [
        CommonModule,
        ButtonModule,
        AcctonCommonModule
    ],
    declarations: [ErrorComponent,]
})
export class ErrorModule { }
