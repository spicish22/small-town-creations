import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'stc-coming-soon',
    styles: [`
        .card {
            height: 350px;
        }
        .card-title {
            color: #64FFDA;
            font-size: 5em;
            font-weight: 200;
        }
        .card-content {
            opacity: 0.8;
        }
        .signature {
            font-size: 0.8em;
            float: right;
        }
    `],
    template: `
        <md-card class="card" fxLayout="column" fxLayoutAlign="center center">
            <md-card-title class="card-title">{{title | uppercase}}</md-card-title>
            <span class="card-content">
                <p class="card-content">{{content}}</p>
                <span class="signature">{{signature}}</span>
            </span>
        </md-card>
    `
})
export class ComingSoonComponent implements OnInit {
    title = 'Coming Soon';
    content = 'We are so excited about the future of our company and can’t wait to share with you our next big thing.';
    signature = '~ Jess & Lauren';

    constructor() { }

    ngOnInit() { }
}