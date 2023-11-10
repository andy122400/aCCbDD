import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-base-input-number',
  templateUrl: './base-input-number.component.html',
  styleUrls: ['./base-input-number.component.scss']
})
export class BaseInputNumberComponent {

  @Input() data: any | undefined;

}
