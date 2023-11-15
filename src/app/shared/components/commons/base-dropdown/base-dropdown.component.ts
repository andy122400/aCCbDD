import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

@Component({
    selector: 'app-base-dropdown',
    templateUrl: './base-dropdown.component.html',
    styleUrls: ['./base-dropdown.component.scss'],
    standalone: true,
    imports: [DropdownModule, FormsModule]
})
export class BaseDropdownComponent {
  
  @Input() data: any | undefined;

  constructor(){

  }

}
