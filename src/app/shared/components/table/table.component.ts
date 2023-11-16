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
    @Input({required: true}) dataItems!: TypeRow[];
    @Input() itemSelected?: TypeRow;
    @Input() columnVisible?: string[];

    @Output() onOpenDialogDetail = new EventEmitter<TypeRow>();
    @Output() onSelectItem = new EventEmitter<TypeRow>();

    filteredItems: TypeRow[];
    columns: string[] = [];

   ngOnInit(): void {

    
   }
    ngOnChanges(changes: SimpleChanges) {
        if(this.dataItems.length === 0) {
           this.columns = this.columnVisible;
        } else {
            this.columns = Object.keys(this.dataItems[0]).filter((field) => {
                if (this.columnVisible) {
                    return this.columnVisible.includes(field);
                }
                return true
            });
            this.filteredItems = [...this.dataItems];
        }

    }

    handleShowDialogDetail(item: TypeRow){
        this.onOpenDialogDetail.emit(item)
    }
    handleSelectItem(item: TypeRow){
        if(this.itemSelected === item) {
            this.onSelectItem.emit(null)
        } else {
            this.onSelectItem.emit(item)
        }
    
    }
}
