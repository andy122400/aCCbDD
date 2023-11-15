import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog-create',
  templateUrl: './dialog-create.component.html',
  styleUrls: ['./dialog-create.component.scss']
})
export class DialogCreateComponent {
  @Input() visible : boolean = false;
  @Input() header : string = 'Create List';
  @Output() onClose = new EventEmitter<any>();
  @Input() options: any[] | undefined;

  constructor () {
   
  }

  handleClose(){
    this.onClose.emit(false);
  }
}
