import { NgModule } from '@angular/core';
import { LayoutMainComponent } from './layout-main.component';
import { RouterModule } from '@angular/router';
import { ClassesComponent } from './data-settings/classes/classes.component';
import { CriteriaComponent } from './data-settings/criteria/criteria.component';
import { ListsComponent } from './data-settings/lists/lists.component';
import { ProcessExtensionsComponent } from './data-settings/process-extensions/process-extensions.component';
import { CharacterSetsComponent } from './data-settings/character-sets/character-sets.component';
import { AutoNumbersComponent } from './data-settings/auto-numbers/auto-numbers.component';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { BaseTableComponent } from 'src/app/shared/components/commons/base-table/base-table.component';
import { BaseDialogModule } from 'src/app/shared/components/commons/base-dialog/base-dialog.module';

@NgModule({
    imports: [
        RouterModule,
        ButtonModule,
        TooltipModule,
        TableModule,
        CommonModule,
        DialogModule,
        BaseDialogModule
    ],
    declarations: [
        LayoutMainComponent, 
        ClassesComponent, 
        CriteriaComponent, 
        ListsComponent, 
        ProcessExtensionsComponent, 
        CharacterSetsComponent, 
        AutoNumbersComponent,
        BaseTableComponent,
        ],
    exports: [LayoutMainComponent]
})
export class LayoutMainModule { }
//
