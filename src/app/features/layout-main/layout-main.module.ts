import { NgModule } from '@angular/core';
import { LayoutMainComponent } from './layout-main.component';
import { RouterModule } from '@angular/router';
import { ClassesComponent } from './data-settings/classes/classes.component';
import { CriteriaComponent } from './data-settings/criteria/criteria.component';
import { ProcessExtensionsComponent } from './data-settings/process-extensions/process-extensions.component';
import { CharacterSetsComponent } from './data-settings/character-sets/character-sets.component';
import { AutoNumbersComponent } from './data-settings/auto-numbers/auto-numbers.component';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { DialogCreateModule } from 'src/app/shared/components/commons/dialog-create/dialog-create.module';
import { CreateUpdateTableModule } from 'src/app/shared/components/commons/create-update-table/create-update-table.module';
import { BaseDropdownModule } from 'src/app/shared/components/commons/base-dropdown/base-dropdown.module';
import { ListsModule } from './data-settings/lists/lists.module';
import { DialogDetailModule } from 'src/app/shared/components/commons/dialog-detail/dialog-detail.module';

@NgModule({
    imports: [
        RouterModule,
        ButtonModule,
        TooltipModule,
        TableModule,
        CommonModule,
        DialogModule,
        DialogDetailModule,
        DialogCreateModule,
        BaseDropdownModule,
        CreateUpdateTableModule,
        ListsModule
    ],
    declarations: [
        LayoutMainComponent, 
        ClassesComponent, 
        CriteriaComponent, 
        ProcessExtensionsComponent, 
        CharacterSetsComponent, 
        AutoNumbersComponent,
        ],
    exports: [LayoutMainComponent]
})
export class LayoutMainModule { }
//
