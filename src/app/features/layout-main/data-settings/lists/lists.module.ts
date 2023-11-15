import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListsComponent } from './lists.component';
import { BaseDropdownModule } from 'src/app/shared/components/commons/base-dropdown/base-dropdown.module';
import { BaseTableModule } from 'src/app/shared/components/table/table.module';
import { DialogCreateModule } from 'src/app/shared/components/commons/dialog-create/dialog-create.module';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogDetailModule } from 'src/app/shared/components/commons/dialog-detail/dialog-detail.module';


@NgModule({
    imports: [
        RouterModule,
        BaseDropdownModule,
        BaseTableModule,
        DialogCreateModule,
        InputTextModule,
        FormsModule,
        ButtonModule,
        DialogDetailModule

    ],
    declarations: [ListsComponent
        ],
    exports: [ListsComponent]
})
export class ListsModule { }
//
