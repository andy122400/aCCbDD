import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-base-input-text',
    templateUrl: './base-input-text.component.html',
    styleUrls: ['./base-input-text.component.scss'],
})
export class BaseInputTextComponent {
    @Input() data: any | undefined;
    
    constructor() {
    }
}
