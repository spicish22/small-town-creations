import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'stc-mission-statement',
    styles: [`
        .card {
            background-color: #323232;
        }
        .card-title {
            color: #fff;
            font-size: 2.5em;
            font-weight: 200;
            opacity: 0.4;
        }
        .card-content {
            color: #fff;
            opacity: 0.8;
        }
        .card-icon {
            background-image: url('assets/images/founders.jpg');
            background-position: center center;
            background-size: cover;
        }

        @media only screen and (max-width: 412px) {

            .card-title { 
                font-size: 1.8em; 
            }
        }
    `],
    template: `
        <md-card class="card">
            <md-card-content>
                <md-card-title class="card-title">{{title}}</md-card-title>
                <p class="card-content">{{content}}</p>
            </md-card-content>
            <md-card-actions>
                <a href="{{facebookLinkUrl}}" md-button color="primary" target="_blank">{{facebookLinkTitle}}</a>
            </md-card-actions>
        </md-card>
    `
})
export class MissionStatementComponent implements OnInit {
    title = 'Our Commitment To You';
    content = `
        Our company was founded on passion of design, committment to friendship, and building lasting relationships. 
        We stand by our products 100%, and will be available to help you if you feel unsatisfied with the work. 
        Due to the level of customization, every product we make is truly one of a kind. All sales are final. 
        We encourage you to get to know us a bit better by joining our facebook group.`;

    facebookLinkTitle = 'Check us out on Facebook';
    facebookLinkUrl = 'https://www.facebook.com/groups/1565910747048127/';

    constructor() { }

    ngOnInit() { }
}