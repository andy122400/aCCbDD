import { Component } from '@angular/core';
import { IData } from 'src/app/shared/components/commons/base-table/base-table.component';

@Component({
  selector: 'app-process-extensions',
  templateUrl: './process-extensions.component.html',
  styleUrls: ['./process-extensions.component.scss']
})
export class ProcessExtensionsComponent {
  data: IData | undefined;

  constructor(){}
  ngOnInit(): void {
    this.data = {
      header: ['Name', 'Description', 'API Name', 'Enable'],
      items: [{name : '1', description: '2', ApiName: '3', Enable: '5'}],
    }
  }
}
