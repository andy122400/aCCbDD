import { Component } from '@angular/core';


@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent {

  classesData!: any[];

  openDialog: boolean = false;

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
