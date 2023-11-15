import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-create-update-table',
  templateUrl: './create-update-table.component.html',
  styleUrls: ['./create-update-table.component.scss']
})
export class CreateUpdateTableComponent {

  @Input() items: any[] | undefined;

  constructor(){

  }
  ngOnInit(): void {
    
  }
}
