import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Lightbox } from 'ngx-lightbox';

@Component({
    selector: 'prf-airprop-modal',
    templateUrl: 'airprop-modal.component.html',
    styleUrls: ['./airprop-modal.component.scss']
})

export class AirPropModalComponent implements OnInit {
    images = [
        {
            src: '../../../assets/images/portfolio-imgs/airpropspec.jpg',
            thumb: '../../../assets/images/portfolio-imgs/airpropspec.jpg',
            caption: 'Home page.'
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