import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { DialogCreateComponent } from './dialog-create.component';
import { CreateUpdateTableModule } from '../create-update-table/create-update-table.module';

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        DialogModule,
        CreateUpdateTableModule
    ],
    declarations: [
        DialogCreateComponent],
    exports: [DialogCreateComponent]
})
export class DialogCreateModule { }