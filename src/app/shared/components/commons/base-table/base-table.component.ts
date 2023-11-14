import { Component, Input } from '@angular/core';


export interface IData {
    header: string[];
    items: any[] | [];
}

@Component({
  selector: 'app-base-table',
  templateUrl: './base-table.component.html',
  styleUrls: ['./base-table.component.scss']
})
export class BaseTableComponent {

  @Input() data: IData | undefined;

constructor() {
}
ngOnInit(): void {}
}
