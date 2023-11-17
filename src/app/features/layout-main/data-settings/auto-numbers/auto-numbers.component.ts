import { Component, inject } from '@angular/core';
import { DialogDetailComponent } from '../../../../shared/components/commons/dialog-detail/dialog-detail.component';
import { DialogCreateComponent } from '../../../../shared/components/commons/dialog-create/dialog-create.component';
import { TableComponent } from '../../../../shared/components/table/table.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { BaseDropdownComponent } from '../../../../shared/components/commons/base-dropdown/base-dropdown.component';
import { NgFor, NgIf } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { AsyncPipe } from '@angular/common';
import { BaseInputTextComponent } from 'src/app/shared/components/commons/base-input-text/base-input-text.component';
import { RippleModule } from 'primeng/ripple';
import { DialogModule } from 'primeng/dialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import BaseComponent from 'src/app/shared/components/base/base.component';
import ApiClient from 'src/app/shared/services/network/api.client';
import { Snackbar } from 'src/app/shared/services/snackbar.service';

@Component({
    selector: 'app-auto-numbers',
    templateUrl: './auto-numbers.component.html',
    styleUrls: ['./auto-numbers.component.scss'],
    standalone: true,
    imports: [BaseDropdownComponent, FormsModule, InputTextModule, ButtonModule, TableComponent, DialogCreateComponent, DialogDetailComponent, NgIf
    , NgFor, TooltipModule, BaseInputTextComponent, AsyncPipe, RippleModule, DialogModule, ProgressSpinnerModule]
})
export class AutoNumbersComponent extends BaseComponent{

    componentHeader: string = null;
    componentBody: any[] = [];
    topActions: any = {};
    filterOptions: any = {};
    tableData: any = {};
    bottomActions: any = {};

    initScreen: any = {};

    initCreateForm: any = {};

    openDialog: boolean = false;
    openDialogDetail: boolean = false;
    itemSelected?: any;

    private apiClient = inject(ApiClient);
    private snackbar = inject(Snackbar);

    constructor(){
        super();
    }

    async getInitScreen(){
        return await this.apiClient.get('/api/fr-lists/screen').then(res => {this.renderInitScreen(res)}).catch(e => {
            this.snackbar.showError("An error occurred: Init screen");
        }) 
    }

    renderInitScreen(json: any){
        if(!json) return;
        console.log("check json :", json);
        if(json?.header?.data) {
            this.componentHeader = json.header.data;
        }
        //get top action
        if(json?.body?.top?.children?.length > 0) {
            this.topActions = json.body.top.children;
            const formResp = json.body?.top?.children?.find((action: any) => action?.data?.icon === 'ADD');
            this.initCreateForm = formResp?.data?.onPress?.data;
        }
        // get filter action
        const filterResp = json?.body?.body?.children?.find((e: any) => e.type === 'FILTER');
        if(filterResp){
            const parseOptions = filterResp?.data?.map((item: any) => {
                if(!item?.options && item.type !== 'BUTTON'){
                    return {
                        ...item,
                        type: 'inputtext',
                        value: '',
                        readonly: false
                    }
                } else {
                    return item;
                }
            })
            this.filterOptions = parseOptions;
        }

        // get table
        const tableResp = json?.body?.body?.children?.find((e: any) => e.type === 'TABLE');
        if(tableResp?.data?.headers){
            this.tableData = tableResp?.data;
        }
    }

    override ngOnInit(): void {
        this.showLoading(true);
        this.getInitScreen();
        this.showLoading(false);
    }

    setTableData(data: any){
        this.tableData = data;
    }

    async handleChangeFilter(){
        const onPress = this.filterOptions?.find((e: any) => e?.type === 'BUTTON')?.data?.onPress;
        const actionName:string =  onPress.action_name;
        try {
            this.showLoading(true);
            const url = onPress?.url;
            await this.apiClient.post(url, this.initParam()).then((res: any) => {
                this[actionName](res.data)
                })
        } catch(e){
            this.snackbar.showError("An error occurred: filter");
        }
        this.showLoading(false);
    }

    initParam(){
        var map: any = {
        }
        this.filterOptions.map((e: any) => {
            if(e?.options?.length){
                map[e.key]= e?.selectItem?.id
            } else if(e?.type !== 'BUTTON'){
                map[e.key] = e.value
            }
        });
        return map;
    }

    handleAction(action: any) {
        if(!action) return ;
        switch(action?.data?.icon){
            case 'ADD': {
                this.showDialog();
                break;
            }
            default: return;
        }
    }

    showDialog () {
        this.openDialog = true;
    }

    closeDialog () {
        this.openDialog = false;
    }

    handleShowDialogDetail(item: any) {
        this.openDialogDetail = true;
    }

    handleHideDialogDetail () {
        this.openDialogDetail = false;
    }
    
    handleSelectItem(item: any){
        this.itemSelected = item;
    }

    handleSaveNewItem(item: any) {
        this.tableData = {...this.tableData, data: this.tableData.data.concat(item)}
    }
}
