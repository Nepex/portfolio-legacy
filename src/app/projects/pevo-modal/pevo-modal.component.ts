import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Lightbox } from 'ngx-lightbox';

@Component({
    selector: 'prf-pevo-modal',
    templateUrl: 'pevo-modal.component.html',
    styleUrls: ['./pevo-modal.component.scss']
})

export class PevoModalComponent implements OnInit {
    images = [
        {
            src: '../../../assets/images/portfolio-imgs/pevo.jpg',
            thumb: '../../../assets/images/portfolio-imgs/pevo.jpg',
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