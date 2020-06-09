import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Lightbox } from 'ngx-lightbox';

@Component({
    selector: 'prf-mototrax-web-modal',
    templateUrl: 'mototrax-web-modal.component.html',
    styleUrls: ['./mototrax-web-modal.component.scss']
})

export class MototraxWebModalComponent implements OnInit {
    images = [
        {
            src: '../../../assets/images/portfolio/portfolio-imgs/mototrax-web-dashboard.png',
            thumb: '../../../assets/images/portfolio/portfolio-imgs/mototrax-web-dashboard.png',
            caption: 'Displayed vehicle overview and recent events.'
        },
        {
            src: '../../../assets/images/portfolio/portfolio-imgs/mototrax-web-fleet.png',
            thumb: '../../../assets/images/portfolio/portfolio-imgs/mototrax-web-fleet.png',
            caption: 'Displayed vehicles within an organization.'
        },
        {
            src: '../../../assets/images/portfolio/portfolio-imgs/mototrax-web-vehicle.png',
            thumb: '../../../assets/images/portfolio/portfolio-imgs/mototrax-web-vehicle.png',
            caption: 'Let the user view a single vehicle.'
        },
        {
            src: '../../../assets/images/portfolio/portfolio-imgs/mototrax-web-events.png',
            thumb: '../../../assets/images/portfolio/portfolio-imgs/mototrax-web-events.png',
            caption: 'Listed out recent events for the user to filter and view.'
        },
        {
            src: '../../../assets/images/portfolio/portfolio-imgs/mototrax-web-mapevent.png',
            thumb: '../../../assets/images/portfolio/portfolio-imgs/mototrax-web-mapevent.png',
            caption: 'Mapped out chosen events by the user.'
        },
        {
            src: '../../../assets/images/portfolio/portfolio-imgs/mototrax-web-livetracking-lowres.png',
            thumb: '../../../assets/images/portfolio/portfolio-imgs/mototrax-web-livetracking-lowres.png',
            caption: 'An animated map of all current vehicle movement within the fleet.'
        },
        {
            src: '../../../assets/images/portfolio/portfolio-imgs/mototrax-web-geofences.png',
            thumb: '../../../assets/images/portfolio/portfolio-imgs/mototrax-web-geofences.png',
            caption: 'Allowed the user to create and edit vehicle geofences.'
        },
        {
            src: '../../../assets/images/portfolio/portfolio-imgs/mototrax-web-route.png',
            thumb: '../../../assets/images/portfolio/portfolio-imgs/mototrax-web-route.png',
            caption: 'Let user edit vehicle routes.'
        },
        // {
        //     src: '../../../assets/images/portfolio/portfolio-imgs/mototrax-web-db.png',
        //     thumb: '../../../assets/images/portfolio/portfolio-imgs/mototrax-web-db.png',
        //     caption: 'Driver behavior module that displayed driver statistics, video, and behavior.'
        // },
        {
            src: '../../../assets/images/portfolio/portfolio-imgs/mototrax-web-changeorg.png',
            thumb: '../../../assets/images/portfolio/portfolio-imgs/mototrax-web-changeorg.png',
            caption: 'Organization swapper.'
        },
        {
            src: '../../../assets/images/portfolio/portfolio-imgs/mototrax-web-admin.png',
            thumb: '../../../assets/images/portfolio/portfolio-imgs/mototrax-web-admin.png',
            caption: 'Complete admin module.'
        },
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