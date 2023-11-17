import {Component, inject} from '@angular/core';
import { DialogDetailComponent } from '../../../../shared/components/commons/dialog-detail/dialog-detail.component';
import { DialogCreateComponent } from '../../../../shared/components/commons/dialog-create/dialog-create.component';
import { TableComponent } from '../../../../shared/components/table/table.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { BaseDropdownComponent } from '../../../../shared/components/commons/base-dropdown/base-dropdown.component';
import {Snackbar} from "../../../../shared/services/snackbar.service";
import BaseComponent from 'src/app/shared/components/base/base.component';
import { CustomFrListModel, FrListModel, IFrListRequest } from 'src/app/shared/services/network/models/frlist.model';
import { FrListService } from 'src/app/shared/services/fr-list.service';
import { RippleModule } from 'primeng/ripple';
import { DialogModule } from 'primeng/dialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { AsyncPipe } from '@angular/common';
import { BaseInputTextComponent } from 'src/app/shared/components/commons/base-input-text/base-input-text.component';

@Component({
    selector: 'app-lists',
    templateUrl: './lists.component.html',
    styleUrls: ['./lists.component.scss'],
    standalone: true,
    imports: [BaseDropdownComponent, FormsModule, InputTextModule, ButtonModule, TableComponent, DialogCreateComponent,
        DialogModule, DialogDetailComponent, RippleModule, ProgressSpinnerModule, AsyncPipe, BaseInputTextComponent]
})

export class ListsComponent extends BaseComponent{
    openDialog: boolean = false;
    openDialogDetail: boolean = false;
    itemSelected?: CustomFrListModel;

    private frListsService = inject(FrListService);

    private snackbar = inject(Snackbar);

    columnVisible = ["ID", "Name", "Description", "Status"];

    dataItems: CustomFrListModel[] = [];

    dataDropdown = [
        {
            label:'Filter By',
            id: 1,
            options: [
                {id: 1, name: 'Name'},
                {id: 2, name: 'Description'},
                {id: 3, name: 'ID'}
            ] ,
            selectItem: {id: 1, name: 'Name'} ,
            readonly: false },
        {
            label:'Match If',
            id: 2,
            options: [
                {id: 1, name: 'Start With'},
                {id: 2, name: 'Show All'},
                {id: 3, name: 'Contains'},
                {id: 4, name: 'Ends With'},
                {id: 5, name: 'Equals'}
            ] ,
            selectItem: {id: 1, name: 'Start With'} ,
            readonly: false 
        },
        {
            id: 3,
            label: 'Value',
            type: 'inputtext',
            value: '',
            name: '',
            readonly: false
        }
    ]

    createOptions  = [
        { type : 'inputtext',label:'Name',id: 1, name: '' , value: '', readonly:false },
        { type : 'inputtext',label:'Category',id: 2, name: '' , value: '', readonly:false },
        { type : 'inputtextarea',label:'Description',id: 3, name: '' , value: '', rows: 1 },
        { type : 'dropdown',label:'Status', id: 4, options: [
            {
                id: 1,
                value: 1,
                name: 'Active'

            },
            {
                id: 2,
                name: 'Inactive',
                value: 0
            }
        ] , selectItem: { id: 1, value: 1, name: 'Active'} , value: '', readonly: true },
    ];

    editOptions  = [
        { type : 'inputtext',label:'Name',id: 1, name: '' , value: '', readonly:false },
        { type : 'inputtextarea',label:'Description',id: 3, name: '' , value: '', rows: 1 },
        { type : 'dropdown',label:'Status', id: 4, options: [
            {
                id: 1,
                value: 1,
                name: 'Active'

            },
            {
                id: 2,
                name: 'Inactive',
                value: 2
            }
        ] , selectItem: { id: 1, value: 1, name: 'Active'} , value: '', readonly: true },
    ];
    menuTabs = [
        { id: 1, label: 'General Information'},
        { id: 2, label: 'List' },
        { id: 3, label: 'Where Used'},
        { id: 4, label: 'History' }
    ];

    handleShowDialog () {
        this.openDialog = true;
    }
    handleHideDialog () {
        this.openDialog = false;
    }

    handleShowDialogDetail(item: FrListModel) {
        this.openDialogDetail = true;
    }
    handleHideDialogDetail () {
        this.openDialogDetail = false;
    }

    handleSelectItem(item: CustomFrListModel){
        this.itemSelected = item;
        this.editOptions[0].value = item.Name,
        this.editOptions[1].value = item.Description,
        this.editOptions[2].selectItem = this.editOptions[2].options.find(e => e.name === item.Status)
    }

    constructor() {
        super();
        this.handleGetLists({ 
            match_if: 'show_all',
            field_type: 'name',
            content: ''
            }
        )
    }
     
    override ngOnInit(): void {
      
    }

    async handleGetLists(request: IFrListRequest) {
        try {
            this.dataItems = [{
                ID: 1,
                Name: "item.name",
                Description: "item.description",
                Category: "item.category",
                Status: true ? 'Active' : 'Inactive',
                createDate: "item.create_date",
                updateDate: "item.update_date",
                createBy: "item.create_by",
                updateBy: "item.update_by",
                stateVoid: 0
            }]
            // this.showLoading(true);
            // await this.frListsService.getFrList(request).then(res => {
            //     if(res?.data?.length) {
            //         const parseFrList = this.frListsService.parseFrListModel(res.data);
            //         this.dataItems = parseFrList;  
            //     }
            // });
        } catch(e){
            console.log("check error :", e);
        }
        this.showLoading(false);

    }

    async handleSaveItem(options: any) {
        const request = {
            name: options[0].value,
            category: options[1].value,
            description: options[2].value,
            status: options[3].selectItem.value
        }
        this.showLoading(true);
        try {
            await this.frListsService.saveItemFrList(request).then(resp => {
                if(resp?.code === 200){
                    this.snackbar.showSuccess(" Add item successfull !");
                    this.dataItems = [this.frListsService.parseFrListItem(resp?.data), ...this.dataItems]
                    this.createOptions[0].value = '';
                    this.createOptions[1].value = '';
                    this.createOptions[2].value = '';
                    this.createOptions[3].selectItem = this.createOptions[3].options[0];
                } else {
                    this.snackbar.showError(resp?.message);
                }
                this.handleHideDialog();
            });
        } catch(e){
            this.snackbar.showError("An error occurred");
        }
        this.showLoading(false);

    }

    async handleDeleteItem(id: number) {
        if(!id) return;
        this.showLoading(true);
        try {
            await this.frListsService.deleteItemFrList(id).then(resp => {
                if(resp?.code === 200){
                    this.snackbar.showSuccess(" Delete item successfull !");
                    this.dataItems = this.dataItems?.filter(item => item.ID !== id);
                } else {
                    this.snackbar.showError(resp?.message);
                }
                this.handleHideDialog();
            });
        }catch(e) {
            this.snackbar.showError("An error occurred");
        }
        this.showLoading(false);
    }

    handleChangeFilter(){
        this.handleGetLists({ 
            match_if: this.dataDropdown[0].selectItem.name.toLowerCase().trim().replace(' ', ''),
            field_type: this.dataDropdown[1].selectItem.name.toLowerCase(),
            content: this.dataDropdown[2].value
            }
        )
    }

    getInitDetailFunction(){
        
    }

}
