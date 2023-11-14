import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css'],
})
export class TableComponent<TypeRow> implements OnChanges {
    @Input({required: true}) dataItems: TypeRow[];

    filteredItems: TypeRow[];
    columns: string[] = [];

    // ngOnInit() {
    //     this.columns = Object.keys(this.dataItems[0]);
    //     this.filteredItems = [...this.dataItems];
    // }

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



}
