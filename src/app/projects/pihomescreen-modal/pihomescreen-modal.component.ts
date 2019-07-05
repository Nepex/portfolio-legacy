import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Lightbox } from 'ngx-lightbox';

@Component({
    selector: 'prf-pihomescreen-modal',
    templateUrl: 'pihomescreen-modal.component.html',
    styleUrls: ['./pihomescreen-modal.component.scss']
})

export class PiHomescreenModalComponent implements OnInit {
    images = [
        {
            src: '../../../assets/images/portfolio-imgs/pi-homescreen-lowres.png',
            thumb: '../../../assets/images/portfolio-imgs/pi-homescreen-lowres.png',
            caption: 'Homescreen.'
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