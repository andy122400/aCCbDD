import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BaseDialogComponent } from './base-dialog.component';
import { DialogModule } from 'primeng/dialog';
import { TabMenuModule } from 'primeng/tabmenu';

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        DialogModule,
        TabMenuModule
    ],
    declarations: [
        BaseDialogComponent],
    exports: [BaseDialogComponent]
})
export class BaseDialogModule { }