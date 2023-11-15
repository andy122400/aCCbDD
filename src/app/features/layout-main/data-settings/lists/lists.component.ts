import { Component } from '@angular/core';
import { DialogDetailComponent } from '../../../../shared/components/commons/dialog-detail/dialog-detail.component';
import { DialogCreateComponent } from '../../../../shared/components/commons/dialog-create/dialog-create.component';
import { TableComponent } from '../../../../shared/components/table/table.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { BaseDropdownComponent } from '../../../../shared/components/commons/base-dropdown/base-dropdown.component';

@Component({
    selector: 'app-lists',
    templateUrl: './lists.component.html',
    styleUrls: ['./lists.component.scss'],
    standalone: true,
    imports: [BaseDropdownComponent, FormsModule, InputTextModule, ButtonModule, TableComponent, DialogCreateComponent, DialogDetailComponent]
})
export class ListsComponent {

    openDialog: boolean = false;
    openDialogDetail: boolean = false;
    searchValue: string = '';
    itemSelected: any = {};

    dataItems = [
        {
        "ID": 1,
        "Name": "louis luong",
        "Description": "Hello louis",
        "API Name": 'fake 1',
        "Criteria": ''
        },
        {
        "ID": 2,
        "Name": "marco duong",
        "Description": "Hello marco",
        "API Name": 'fake 2',
        "Criteria": ''
        },
        {
        "ID": 3,
        "Name": "chavis nguyen",
        "Description": "Hello chavis",
        "API Name": 'fake 3',
        "Criteria": ''
        },   {
        "ID": 4,
        "Name": "taiwan",
        "Description": "Hello taiwan team",
        "API Name": 'fake 4',
        "Criteria": ''
        }

    ]

    dataDropdown = [{
        label:'Filter By',
        id: 5, 
        options: [
        {id: 1, name: 'Name'}, 
        {id: 2, name: 'Description'},
        {id: 3, name: 'ID'}
        ] , 
        selectItem: {id: 1, name: 'Name'} , 
        readonly: false },
        {
        label:'Match If',
        id: 5, 
        options: [
            {id: 1, name: 'Start With'}, 
            {id: 2, name: 'Show ALl'},
            {id: 3, name: 'Contains'},
            {id: 4, name: 'Ends With'},
            {id: 5, name: 'Equals'}
        ] , 
        selectItem: {id: 1, name: 'Start With'} , 
        readonly: false }
    ]
    options  = [
        { type : 'inputtext',label:'Name',id: 1, name: 'a01' , value: '', readonly:false },
        { type : 'inputtext',label:'API Name',id: 2, name: '' , value: '', readonly:true },
        { type : 'inputtextarea',label:'Description',id: 3, name: '' , value: '', rows: 1 },  
        { type : 'dropdown', label:'Enable',id: 4, options: [
        {id: 1, name: 'Disable'}, 
        {id: 2, name: 'Enable'}
        ] , selectItem: {id: 2, name: 'Enable'},readonly: false },
        { type : 'dropdown',label:'List Type',id: 5, options: [
        {id: 1, name: 'Simple'}, 
        {id: 2, name: 'Cascade'},
        {id: 3, name: 'Dynamic'}
        ] , selectItem: {id: 1, name: 'Simple'} , readonly: false },
        { type : 'inputnumber',label:'Criteria',id: 6, name: '' , value: '', readonly: true },
        // { type : 'inputnumber',label:'Number',id: 7, name: '' , value: 0 , readonly: false },
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

    handleShowDialogDetail () {
        this.openDialogDetail = true;
    }
    handleHideDialogDetail () {
        this.openDialogDetail = false;
    }
    constructor(){

    }
    handleSelectItem(item: {}){
        this.itemSelected = item;
    }
    ngOnInit(): void {
      
    }

}
