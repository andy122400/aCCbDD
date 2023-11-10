import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-base-text-area',
  templateUrl: './base-text-area.component.html',
  styleUrls: ['./base-text-area.component.scss']
})
export class BaseTextAreaComponent {

  @Input() data: any | undefined

  constructor(){

  }
}
