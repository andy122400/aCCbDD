import { Component } from '@angular/core';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss'],
})
export class TestComponent {
    items: any = [
        {
            type: 'list_general',
            label: 'List General',
        },
        {
            type: 'text',
            label: 'Name',
            id: 1,
            value: 'soái ca không',
            readonly: false,
        },
        {
            type: 'text',
            label: 'Api Name',
            id: 2,
            value: 'soái ca không',
            readonly: true,
        },
        {
            type: 'dropdown',
            label: 'Enable',
            id: 3,
            value: 'soái ca không',
            readonly: false,
            options: [
                { name: 'Yes', code: '0' },
                { name: 'No', code: '1' }
            ],
            selectItem: ''
        },
        {
            type: 'dropdown',
            label: 'List Type',
            id: 4,
            value: '555',
            readonly: false,
            options: [
                { name: 'Yes', code: '0' },
                { name: 'No', code: '1' }
            ],
            selectItem: ''
        },
        {
            type: 'textarea',
            label: 'Description',
            id: 5,
            value: 'soái ca không',
            readonly: false,
        },
        {
            type: 'number',
            label: 'number no',
            id: 5,
            value: 0,
            readonly: false,
        },
    ];

    constructor() {
    }
    ngOnInit(): void {}
}
