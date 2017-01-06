import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'stc-app-header',
    styles: [`
        .app-toolbar-title {
            color: #00897B;
            font-weight: 200;
        }
    `],
    template: `
        <header>
            <md-toolbar color="primary">
                <span class="app-toolbar-title">{{title}}</span>
            </md-toolbar>
        </header>
    `
})
export class AppHeaderComponent implements OnInit {
    title = 'small town creations';

    constructor() { }

    ngOnInit() { }
}