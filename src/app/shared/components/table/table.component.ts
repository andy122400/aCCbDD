import {Component, Input, OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';
import { ScrollTopModule } from 'primeng/scrolltop';
import { NgFor, NgIf } from '@angular/common';
import { SharedModule } from 'primeng/api';
import { TableModule } from 'primeng/table';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css'],
    standalone: true,
    imports: [
        TableModule,
        SharedModule,
        NgFor,
        NgIf,
        ScrollTopModule,
    ],
})
export class TableComponent<TypeRow> implements OnChanges {
    @Input({required: true}) dataItems: TypeRow[];
    @Input({required: false}) itemSelected: any = {};
   
    @Output() onOpenDialogDetal = new EventEmitter<boolean>();
    @Output() onSelectItem = new EventEmitter<{}>();
    filteredItems: TypeRow[];
    columns: string[] = [];

    // ngOnInit() {
    //     this.columns = Object.keys(this.dataItems[0]);
    //     this.filteredItems = [...this.dataItems];
    // }
    constructor(){
    }


    ngOnChanges(changes: SimpleChanges) {
        this.columns = Object.keys(this.dataItems[0]);
        this.filteredItems = [...this.dataItems];
    }

    onSearch(keyword: string) {
        this.filteredItems = this.dataItems.filter(item => {
            return this.columns.some(column => {
                return item[column].toString().toLowerCase().includes(keyword.toLowerCase())
            });
        });
        console.log(this.filteredItems.length)
    }

    onShowDialogDetail(){
        this.onOpenDialogDetal.emit(true)
    }
    handleSelectItem(item: {}){
        console.log("check item :", item);
        this.onSelectItem.emit(item)
    }
}
