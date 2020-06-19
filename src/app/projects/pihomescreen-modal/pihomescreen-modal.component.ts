// Angular
import { Component } from '@angular/core';

// NPM
import { Lightbox } from 'ngx-lightbox';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'prf-pihomescreen-modal',
    templateUrl: 'pihomescreen-modal.component.html',
    styleUrls: ['./pihomescreen-modal.component.scss']
})

// Modal for showing a project
export class PiHomescreenModalComponent {
    images: {src: string, thumb: string, caption: string}[] = [
        {
            src: '../../../assets/images/portfolio/portfolio-imgs/pi-homescreen-lowres.png',
            thumb: '../../../assets/images/portfolio/portfolio-imgs/pi-homescreen-lowres.png',
            caption: 'Homescreen.'
        }
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