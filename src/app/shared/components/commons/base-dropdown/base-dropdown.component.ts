import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-base-dropdown',
  templateUrl: './base-dropdown.component.html',
  styleUrls: ['./base-dropdown.component.scss']
})
export class BaseDropdownComponent {
  
  @Input() data: any | undefined;

  constructor(){

  }

}
