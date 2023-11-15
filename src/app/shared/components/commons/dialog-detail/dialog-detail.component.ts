import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog-detail',
  templateUrl: './dialog-detail.component.html',
  styleUrls: ['./dialog-detail.component.scss']
})
export class DialogDetailComponent {
  @Input({required: true}) visible : boolean = false;
  @Input() options : any[] = [];
  @Output() onClose = new EventEmitter<boolean>();
  @Input({required: true})  menuTabs: any[] = [];
  @Input({required: false})  itemSelected: any = {};

  activeItem: any = {};

  constructor(){
  }

  ngOnInit() {
      if(this.menuTabs){
        this.activeItem = this.menuTabs[0];
      }
  
  }
  getActiveItem(currentTab: any){
    console.log("check current tab :", currentTab.target.outerText);
    return this.activeItem = currentTab.item;
  }

  handleClose(){
    this.onClose.emit(false);
  }
}
