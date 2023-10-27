import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorRoutingModule } from './error-routing.module';
import { ErrorComponent } from './error.component';
import { ButtonModule } from 'primeng/button';
import { AcctonCommonModule } from '../../accton-common/accton-common.module';




@NgModule({
    imports: [
        CommonModule,
        ErrorRoutingModule,
        ButtonModule,
        AcctonCommonModule
    ],
    declarations: [ErrorComponent,]
})
export class ErrorModule { }
