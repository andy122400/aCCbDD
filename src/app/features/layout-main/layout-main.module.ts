import { NgModule } from '@angular/core';
import { LayoutMainComponent } from './layout-main.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule
    ],
    declarations: [LayoutMainComponent],
    exports: [LayoutMainComponent]
})
export class LayoutMainModule { }
//
