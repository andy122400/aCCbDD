import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { BaseTableComponent } from 'src/app/shared/components/commons/base-table/base-table.component';
@NgModule({
    imports: [
        RouterModule,
        TableModule,
        CommonModule,
    ],
    declarations: [
        BaseTableComponent],
    exports: [BaseTableComponent]
})
export class BaseTableModule { }
//
