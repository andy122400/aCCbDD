import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-base-input-text',
    templateUrl: './base-input-text.component.html',
    styleUrls: ['./base-input-text.component.scss'],
    standalone: true,
    imports: [FormsModule]
})
export class BaseInputTextComponent {
    @Input() data: any | undefined;
}
