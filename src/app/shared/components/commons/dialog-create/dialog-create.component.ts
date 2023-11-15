import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateUpdateTableComponent } from '../create-update-table/create-update-table.component';
import { DialogModule } from 'primeng/dialog';

@Component({
    selector: 'app-dialog-create',
    templateUrl: './dialog-create.component.html',
    styleUrls: ['./dialog-create.component.scss'],
    standalone: true,
    imports: [DialogModule, CreateUpdateTableComponent, RouterOutlet]
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
