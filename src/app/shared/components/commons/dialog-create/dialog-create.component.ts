import { Component, Input, Output, EventEmitter, SimpleChanges, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateUpdateTableComponent } from '../create-update-table/create-update-table.component';
import { DialogModule } from 'primeng/dialog';
import { NgFor, NgIf } from '@angular/common';
import { Snackbar } from 'src/app/shared/services/snackbar.service';
import BaseComponent from '../../base/base.component';
import ApiClient from 'src/app/shared/services/network/api.client';

@Component({
    selector: 'app-dialog-create',
    templateUrl: './dialog-create.component.html',
    styleUrls: ['./dialog-create.component.scss'],
    standalone: true,
    imports: [DialogModule, CreateUpdateTableComponent, RouterOutlet, NgIf, NgFor]
})
export class DialogCreateComponent  extends BaseComponent{
  @Input() visible : boolean = false;
  @Output() onClose = new EventEmitter<any>();
  @Input() initForm: any = {};
  @Output() onSave = new EventEmitter<any>();

  initOptions: any = [];
  initActions: any = [];

  private snackbar = inject(Snackbar);
  private apiClient = inject(ApiClient);


  override ngOnChanges(changes: SimpleChanges): void {
    if(this.initForm && this.initForm?.body?.body?.type === 'FORM') {
      // get options
      const optionsResp = this.initForm?.body?.body?.data?.children?.[0]?.children;
      console.log("check initOptions:", this.initOptions);
      const parseOptions = optionsResp.map((item: any) => {
        if(item.type === 'TEXT_INPUT') {
          return { type : 'inputtext',label: item.data.label, key: item.data.key, value: '', readonly:false }
        } return item;
      });
      this.initOptions = parseOptions;

      //get actions
      const actionsResp = this.initForm?.body?.body?.data?.children?.[1]?.children;
      console.log("check actionsResp:", actionsResp);
      this.initActions = actionsResp;
    }
  }

  handleAction(action: any) {
    switch(action?.data?.text){
      case 'Ok': {
        this.handleSaveItem(action.data.onPress)
        break;
      }
      case 'Cancel': {
        this.handleClose();
        break;
      }
      default: return ;
    }
  }

  handleClose(){
    this.onClose.emit(false);
  }

  async handleSaveItem(onPress: any){
    const actionName:string =  onPress.action_name;
    try {
        this.showLoading(true);
        await this.apiClient.post(onPress.url, this.getParams()).then((res: any) => {
            // this[actionName](res.data)
            if(res?.code === 200) {
              this.snackbar.showSuccess("Add Item Successfull");
              this.handleClose();
              this.onSave.emit(res.data);
            } else {
              this.snackbar.showError("Add Item Failed");
            }
            })
    } catch(e){
        this.snackbar.showError("An error occurred: filter");
    }
    this.showLoading(false);

}
  getParams(){
    var map: any = {
    }
    this.initOptions.map((e: any) => {
        if(e?.options?.length){
            map[e.key]= e?.selectItem?.id
        } else if(e?.type !== 'BUTTON'){
            map[e.key] = e.value
        }
    });
    return map;
  }
}
