// Angular
import { Component } from '@angular/core';

// NPM
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Lightbox } from 'ngx-lightbox';

// Modal for showing a project
@Component({
    selector: 'prf-cascade-modal',
    templateUrl: 'cascade-modal.component.html',
    styleUrls: ['./cascade-modal.component.scss']
})

export class CascadeModalComponent {
    images = [
        {
            src: '../../../assets/images/portfolio/portfolio-imgs/cascade-battle.png',
            thumb: '../../../assets/images/portfolio/portfolio-imgs/cascade-battle.png',
            caption: 'A random encounter battle scene.'
        },
        {
            src: '../../../assets/images/portfolio/portfolio-imgs/cascade-party.png',
            thumb: '../../../assets/images/portfolio/portfolio-imgs/cascade-party.png',
            caption: 'Party management, where a user would manage spells, equipment, and stats.'
        },
        {
            src: '../../../assets/images/portfolio/portfolio-imgs/cascade-travel.png',
            thumb: '../../../assets/images/portfolio/portfolio-imgs/cascade-travel.png',
            caption: 'An interactive map where the user can walk around and encounter random enemies.'
        },
        {
            src: '../../../assets/images/portfolio/portfolio-imgs/cascade-eqpt.png',
            thumb: '../../../assets/images/portfolio/portfolio-imgs/cascade-eqpt.png',
            caption: 'Here a user can manage equipment for specific party members.'
        },
        {
            src: '../../../assets/images/portfolio/portfolio-imgs/cascade-store.png',
            thumb: '../../../assets/images/portfolio/portfolio-imgs/cascade-store.png',
            caption: 'An interactive shop where a user could buy and sell items.'
        },
    ];

    constructor(public activeModal: NgbActiveModal, private lightbox: Lightbox) { }

    // Open lightbox image zoom
    open(index: number): void {
        this.lightbox.open(this.images, index, { centerVertically: true, fadeDuration: 0 });
    }

    // Close lightbox image zoom
    close(): void {
        this.lightbox.close();
    }
}