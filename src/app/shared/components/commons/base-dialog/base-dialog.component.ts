import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-dialog',
  templateUrl: './base-dialog.component.html',
  styleUrls: ['./base-dialog.component.scss']
})

export class BaseDialogComponent implements OnInit{
  @Input() visible : boolean = false;

  @Output() onClose = new EventEmitter<boolean>();

  constructor(){
  }
  items: any[] | undefined;

  activeItem: any | undefined;

  ngOnInit() {
      this.items = [
          { label: 'General Infomation', command: (event: any) => this.getActiveItem(event) },
          { label: 'SubClass', command: (event: any) =>  this.getActiveItem(event) },
          { label: 'User Interface Tabs', command: (event: any) =>  this.getActiveItem(event) },
          { label: 'Lifecycle Phases', command: (event: any) => this.getActiveItem(event) },
          { label: 'Process Extensions', command: (event: any) => this.getActiveItem(event) },
          { label: 'Event Subcribers', command: (event: any) =>  this.getActiveItem(event) },
          { label: 'History', command: (event: any) => this.getActiveItem(event) }
      ];
      this.activeItem = this.items[0];
  }
  getActiveItem(currentTab: any){
    return this.activeItem = currentTab.item;
  }

  handleClose(){
    this.onClose.emit(false);
  }
} 
