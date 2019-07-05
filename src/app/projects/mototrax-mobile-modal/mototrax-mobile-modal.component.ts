import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Lightbox } from 'ngx-lightbox';

@Component({
    selector: 'prf-mototrax-mobile-modal',
    templateUrl: 'mototrax-mobile-modal.component.html',
    styleUrls: ['./mototrax-mobile-modal.component.scss']
})

export class MototraxMobileModalComponent implements OnInit {
    images = [
        {
            src: '../../../assets/images/portfolio-imgs/mototrax-mobile-splash.png',
            thumb: '../../../assets/images/portfolio-imgs/mototrax-mobile-splash.png',
            caption: 'Splash screen while app is initializing.'
        },
        {
            src: '../../../assets/images/portfolio-imgs/mototrax-mobile-login.png',
            thumb: '../../../assets/images/portfolio-imgs/mototrax-mobile-login.png',
            caption: 'Login screen.'
        },
        {
            src: '../../../assets/images/portfolio-imgs/mototrax-mobile-menu.png',
            thumb: '../../../assets/images/portfolio-imgs/mototrax-mobile-menu.png',
            caption: 'Flyout menu.'
        },
        {
            src: '../../../assets/images/portfolio-imgs/mototrax-mobile-map.png',
            thumb: '../../../assets/images/portfolio-imgs/mototrax-mobile-map.png',
            caption: 'Animated map for viewing vehicle movement.'
        },
        {
            src: '../../../assets/images/portfolio-imgs/mototrax-mobile-search.png',
            thumb: '../../../assets/images/portfolio-imgs/mototrax-mobile-search.png',
            caption: 'Filter popup modal.'
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