import { Component, Input } from '@angular/core';
import { BaseInputNumberComponent } from '../base-input-number/base-input-number.component';
import { BaseDropdownComponent } from '../base-dropdown/base-dropdown.component';
import { BaseTextAreaComponent } from '../base-text-area/base-text-area.component';
import { BaseInputTextComponent } from '../base-input-text/base-input-text.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
    selector: 'app-create-update-table',
    templateUrl: './create-update-table.component.html',
    styleUrls: ['./create-update-table.component.scss'],
    standalone: true,
    imports: [NgFor, NgIf, BaseInputTextComponent, BaseTextAreaComponent, BaseDropdownComponent, BaseInputNumberComponent]
})
export class CreateUpdateTableComponent {

  @Input() items: any[] | undefined;

  constructor(){

  }
  ngOnInit(): void {
    
  }
}
