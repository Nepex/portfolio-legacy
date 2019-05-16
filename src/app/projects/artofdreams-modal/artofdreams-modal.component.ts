import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Lightbox } from 'ngx-lightbox';

@Component({
    selector: 'prf-artofdreams-modal',
    templateUrl: 'artofdreams-modal.component.html',
    styleUrls: ['./artofdreams-modal.component.scss']
})

export class ArtOfDreamsModalComponent implements OnInit {
    images = [
        {
            src: '../../../assets/images/portfolio-imgs/artofdreams.jpg',
            thumb: '../../../assets/images/portfolio-imgs/artofdreams.jpg',
            caption: 'Home page.'
        }
    ]

    constructor(public activeModal: NgbActiveModal, private lightbox: Lightbox) { }

    ngOnInit() { }

    open(index: number): void {
        this.lightbox.open(this.images, index, { centerVertically: true });
    }

    close(): void {
        this.lightbox.close();
    }
}