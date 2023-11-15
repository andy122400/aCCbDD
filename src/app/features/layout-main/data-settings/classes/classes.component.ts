import { Component } from '@angular/core';


@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent {

  classesData!: any[];

  openDialog: boolean = false;

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
    { type : 'inputtext',label:'Criteria',id: 6, name: '' , value: '', readonly: true },
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
