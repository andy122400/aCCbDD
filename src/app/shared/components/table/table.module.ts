import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TableComponent } from "./table.component";
import { TableModule } from 'primeng/table';
import { ScrollTopModule } from 'primeng/scrolltop';

@NgModule({
    imports: [
        CommonModule,
        TableModule,
        ScrollTopModule
    ],
    declarations: [TableComponent],
    exports: [TableComponent]
})
export class BaseTableModule {}