import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Lightbox } from 'ngx-lightbox';

@Component({
    selector: 'prf-globalstar-modal',
    templateUrl: 'globalstar-modal.component.html',
    styleUrls: ['./globalstar-modal.component.scss']
})

export class GlobalstarModalComponent implements OnInit {
    images = [
        {
            src: '../../../assets/images/portfolio-imgs/globalaerospace.jpg',
            thumb: '../../../assets/images/portfolio-imgs/globalaerospace.jpg',
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