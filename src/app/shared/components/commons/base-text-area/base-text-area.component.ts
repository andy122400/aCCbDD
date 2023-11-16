import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-base-text-area',
    templateUrl: './base-text-area.component.html',
    styleUrls: ['./base-text-area.component.scss'],
    standalone: true,
    imports: [FormsModule]
})
export class BaseTextAreaComponent {

  @Input() data: any | undefined

  constructor(){

  }
}
