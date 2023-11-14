import { Component } from '@angular/core';
import { IData } from 'src/app/shared/components/commons/base-table/base-table.component';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent {

  data: IData | undefined;

  constructor(){}
  ngOnInit(): void {
    this.data = {
      header: ['Name', 'Description', 'API Name', 'Valid Character Sets', 'Enable'],
      items: [{name : '1', description: '2', ApiName: '3', ValidCharacterSets :'4', Enable: '5'}],
    }
  }
}
