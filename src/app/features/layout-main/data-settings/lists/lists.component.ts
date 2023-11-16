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
import { FrListModel, IFrListCreateRequest, IFrListRequest } from 'src/app/shared/services/network/models/frlist.model';
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
    itemSelected?: FrListModel;

    private frListsService = inject(FrListService);

    private snackbar = inject(Snackbar);

    columnVisible = ["ID", "Name", "Description", "Category", "Status"];

    dataItems: FrListModel[] = [];

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
    options  = [
        { type : 'inputtext',label:'Name',id: 1, name: '' , value: '', readonly:false },
        { type : 'inputtext',label:'Category',id: 2, name: '' , value: '', readonly:false },
        { type : 'inputtextarea',label:'Description',id: 3, name: '' , value: '', rows: 1 },
        { type : 'inputnumber',label:'Status', id: 4, name: '' , value: '', readonly: true },
    ];
    editOptions  = [
        { type : 'inputtext',label:'Name',id: 1, name: 'a01' , value: '', readonly:false },
        { type : 'inputtext',label:'API Name',id: 2, name: '' , value: '', readonly:true },
        { type : 'inputtextarea',label:'Description',id: 3, name: '' , value: '', rows: 1 },
        { type : 'dropdown', label:'Enable',id: 4,
            options: [
                {id: 1, name: 'Disable'},
                {id: 2, name: 'Enable'}
            ] , selectItem: {id: 2, name: 'Enable'},readonly: true },
        { type : 'dropdown',label:'List Type',id: 5,
            options: [
            {id: 1, name: 'Simple'},
            {id: 2, name: 'Cascade'},
            {id: 3, name: 'Dynamic'}
            ] , selectItem: {id: 1, name: 'Simple'} , readonly: true },
        { type : 'dropdown',label:'Display Type',id: 6, name: '' ,
            options: [
                {id: 1, name: 'Simple'},
                {id: 2, name: 'Cascade'},
                {id: 3, name: 'Dynamic'}
                ], readonly: true },
    ];
    menuTabs = [
        { label: 'General Infomation'},
        { label: 'List' },
        { label: 'Where Used'},
        { label: 'History' }
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

    handleSelectItem(item: FrListModel){
        this.itemSelected = item;
    }

    constructor() {
        super();
        this.handleGetLists({ 
            match_if: 'show_all',
            field_type: 'description',
            content: ''
            }
        )
    }
     
    override ngOnInit(): void {
      
    }

    async handleGetLists(request: IFrListRequest) {
        try {
            this.showLoading(true);
            const res = await this.frListsService.getFrList(request);
            if(res.data) {
                this.dataItems = res.data;
            }
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
            status: options[3].value
        }
        try {
            this.showLoading(true);
            const res = await this.frListsService.saveItemFrList(request);
            console.log("check res :", res);
        } catch(e){
            console.log("check error :", e);
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

}
