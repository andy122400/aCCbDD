import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreateUpdateTableComponent } from './create-update-table.component';
import { BaseInputTextComponent } from '../base-input-text/base-input-text.component';
import { BaseTextAreaComponent } from '../base-text-area/base-text-area.component';
import { BaseDropdownModule } from '../base-dropdown/base-dropdown.module';
import { BaseInputNumberModule } from '../base-input-number/base-input-number.module';
@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        BaseDropdownModule,
        BaseInputNumberModule
    ],
    declarations: [
        CreateUpdateTableComponent, 
        BaseInputTextComponent, 
        BaseTextAreaComponent,
        ],
    exports: [CreateUpdateTableComponent]
})
export class CreateUpdateTableModule { }