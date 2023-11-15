import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogDetailComponent } from './dialog-detail.component';
import { RouterModule } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { TabMenuModule } from 'primeng/tabmenu';
import { CreateUpdateTableModule } from '../create-update-table/create-update-table.module';

@NgModule({
  declarations: [DialogDetailComponent],
  imports: [
    CommonModule,
    RouterModule,
    DialogModule,
    TabMenuModule,
    CreateUpdateTableModule
  ],
  exports: [DialogDetailComponent]
})
export class DialogDetailModule { }
