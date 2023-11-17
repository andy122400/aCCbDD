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
    @Input({required: true}) data!: any;
    @Input() itemSelected?: TypeRow;

    @Output() onOpenDialogDetail = new EventEmitter<TypeRow>();
    @Output() onSelectItem = new EventEmitter<TypeRow>();

    filteredItems: TypeRow[] = [];
    columns: string[] = [];

   ngOnInit(): void {    
   }
   
    ngOnChanges(changes: SimpleChanges) {
        if(this.data?.headers?.length) {
            if(this.data?.data?.length === 0 ) {
                this.columns = this.data.headers?.map((e: any) => e.label);
            } else {
                const headersText = this.data.headers?.map((e: any) => e.key);
                const allColumns = Object.keys(this.data.data[0]);
                this.columns = allColumns?.filter((e: any) => headersText?.includes(e)) ;         
                this.filteredItems = [...this.data.data];
            }
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
