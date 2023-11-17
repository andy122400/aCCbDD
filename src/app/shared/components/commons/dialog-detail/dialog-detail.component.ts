import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CreateUpdateTableComponent } from '../create-update-table/create-update-table.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { DialogModule } from 'primeng/dialog';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-dialog-detail',
    templateUrl: './dialog-detail.component.html',
    styleUrls: ['./dialog-detail.component.scss'],
    standalone: true,
    imports: [DialogModule, TabMenuModule, CreateUpdateTableComponent, NgIf]
})
export class DialogDetailComponent {
  @Input({required: true}) visible : boolean = false;
  @Input() options : any[] = [];
  @Output() onClose = new EventEmitter<boolean>();
  @Input({required: true})  menuTabs: any[] = [];
  @Input({required: false})  itemSelected: any = {};

  activeItem: any = {};

  constructor(){
  }

  ngOnInit() {
      if(this.menuTabs){
        this.activeItem = this.menuTabs[0];
      }
  }
  getActiveItem(currentTab: any){
    return this.activeItem = currentTab;
  }

  handleClose(){
    this.onClose.emit(false);
  }
}