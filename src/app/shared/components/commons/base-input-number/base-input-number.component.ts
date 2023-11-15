import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
    selector: 'app-base-input-number',
    templateUrl: './base-input-number.component.html',
    styleUrls: ['./base-input-number.component.scss'],
    standalone: true,
    imports: [InputNumberModule, FormsModule]
})
export class BaseInputNumberComponent {

  @Input() data: any | undefined;

  constructor(){
  }

}
