import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Lightbox } from 'ngx-lightbox';

@Component({
    selector: 'prf-prate-modal',
    templateUrl: 'prate-modal.component.html',
    styleUrls: ['./prate-modal.component.scss']
})

export class PrateModalComponent implements OnInit {
    images = [
        {
            src: '../../../assets/images/portfolio/portfolio-imgs/prate-home.png',
            thumb: '../../../assets/images/portfolio/portfolio-imgs/prate-home.png',
            caption: 'Landing page for Prate.'
        },
        {
            src: '../../../assets/images/portfolio/portfolio-imgs/prate-signup.png',
            thumb: '../../../assets/images/portfolio/portfolio-imgs/prate-signup.png',
            caption: 'Signup page where user would create an account.'
        },
        {
            src: '../../../assets/images/portfolio/portfolio-imgs/prate-usersettings.png',
            thumb: '../../../assets/images/portfolio/portfolio-imgs/prate-usersettings.png',
            caption: 'Where a user could change their name, avatar, interests, colors, font, and password.'
        },
        {
            src: '../../../assets/images/portfolio/portfolio-imgs/prate-matching.png',
            thumb: '../../../assets/images/portfolio/portfolio-imgs/prate-matching.png',
            caption: 'Queued up screen while matching.'
        },
        {
            src: '../../../assets/images/portfolio/portfolio-imgs/prate-matchedwith.png',
            thumb: '../../../assets/images/portfolio/portfolio-imgs/prate-matchedwith.png',
            caption: 'When a match is found, user is alerted.'
        },
        {
            src: '../../../assets/images/portfolio/portfolio-imgs/prate-chat-lowres.png',
            thumb: '../../../assets/images/portfolio/portfolio-imgs/prate-chat-lowres.png',
            caption: 'Chatting interface.'
        },
        {
            src: '../../../assets/images/portfolio/portfolio-imgs/prate-leftchat.png',
            thumb: '../../../assets/images/portfolio/portfolio-imgs/prate-leftchat.png',
            caption: 'When either person leaves the chat, an alert is issued, and experience is awarded.'
        }
    ]

    constructor(public activeModal: NgbActiveModal, private lightbox: Lightbox) { }

    ngOnInit() { }

    open(index: number): void {
        this.lightbox.open(this.images, index, { centerVertically: true, fadeDuration: 0 });
    }

    close(): void {
        this.lightbox.close();
    }
}