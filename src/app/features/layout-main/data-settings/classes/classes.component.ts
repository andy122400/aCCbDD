import { Component } from '@angular/core';
import { DialogCreateComponent } from '../../../../shared/components/commons/dialog-create/dialog-create.component';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';


@Component({
    selector: 'app-classes',
    templateUrl: './classes.component.html',
    styleUrls: ['./classes.component.scss'],
    standalone: true,
    imports: [TooltipModule, TableModule, SharedModule, ButtonModule, DialogCreateComponent]
})
export class ClassesComponent {

  classesData!: any[];

  openDialog: boolean = false;

  createOptions  = [
    { 
        type : 'dropdown',
        label:'Class',
        id: 1, 
        name: '' , 
        options: [
          {id: 1, name: 'Activities'}, 
          {id: 2, name: 'Part'},
          {id: 3, name: 'Problem Reports'}
          ] , 
        selectItem: {id: 1, name: 'Activities'},
        readonly:false 
    },
    { 
        type : 'dropdown',
        label:'Part Subtype',
        id: 2, 
        options: [
            {id: 1, name: 'Model'}, 
            {id: 2, name: 'Option Class'},
            {id: 3, name: 'Part'}
            ] , 
          selectItem: {id: 3, name: 'Part'},
        readonly: false 
    },
    { 
        type : 'inputtext',
        label:'Name',
        id: 3,
        name: '' , 
        value: '', 
        readonly: false 
    },  
    { 
        type : 'inputtext', 
        label:'API Name',
        id: 4, 
        name: '',
        value: '',
        readonly: false 
    },
    { 
        type : 'inputtextarea',
        label:'Description',
        id: 5, 
        name: '',
        value: '',
        row: 3,
        readonly: false 
    },
    { 
        type : 'dropdown',
        label:'Enable',
        id: 6, 
        options: [
            {id: 1, name: 'No'}, 
            {id: 2, name: 'Yes'},
            ] , 
        selectItem: {id: 2, name: 'Yes'},
        readonly: false 
    },
    { 
        type : 'inputtext',
        label: 'Icon',
        id: 7, 
        name: '' , 
        value: '', 
        readonly:false,
    },
    { 
        type : 'inputtext',
        label:'Icon for Assembly',
        id: 8, 
        name: '' , 
        value: '', 
        readonly:false 
    },
    { 
        type : 'inputtext',
        label:'AutoNumber Source',
        id: 9, 
        name: '' , 
        value: '', 
        readonly:false 
    },
    {
        type: 'checkbox',
        label: 'Autonumber Required',
        id: 10,
        name: '',
        value: false,
        readonly: false
    },
    { 
        type : 'dropdown',
        label:'AutoGenerate',
        id: 10, 
        options: [
            {id: 1, name: 'No'}, 
            {id: 2, name: 'Yes'},
            ] , 
        selectItem: {id: 1, name: 'No'},
        readonly: false 
    },
    { 
        type : 'dropdown',
        label:'Enable',
        id: 6, 
        options: [
            {id: 1, name: 'No'}, 
            {id: 2, name: 'Yes'},
            ] , 
        selectItem: {id: 2, name: 'Yes'},
        readonly: false 
    },
    { 
        type : 'dropdown',
        label:'Site-Specific BOM',
        id: 11, 
        options: [
            {id: 1, name: 'Allow'}, 
            {id: 2, name: 'Disallow'},
            ] , 
        selectItem: {id: 1, name: 'Allow'},
        readonly:false 
    },
    // { type : 'inputnumber',label:'Number',id: 7, name: '' , value: 0 , readonly: false },
];

  constructor() {
    this.classesData = [
      {
          id: '1000',
          code: '1',
          name: 'Bamboo Watch',
          description: 'Product Description',
          APIName: 'bamboo-watch.jpg',
          subClass: [
              {
                  id: '1000-0',
                  name: 'f230fh0g3',
                  description: '2020-09-13',
                  APIName: 65,
                  subClass: [
                    {
                        id: '1000-0',
                        name: 'f230fh0g3',
                        description: '2020-09-13',
                        APIName: 65,
                    },
                    {
                      id: '1000-0',
                      name: 'f230fh0g3',
                      description: '2020-09-13',
                      APIName: 65,
                    }
                ]
              },
              {
                id: '1000-0',
                name: 'f230fh0g3',
                description: '2020-09-13',
                APIName: 65,
              }
          ]
      },
      {
        id: '1001',
        code: '2',
        name: 'Bamboo Watch',
        description: 'Product Description',
        APIName: 'bamboo-watch.jpg',
    },
  ];
  }

  handleShowDialog () {
    this.openDialog = true;
  }
  handleHideDialog () {
    this.openDialog = false;
  }

  ngOnInit() {

  }

}
