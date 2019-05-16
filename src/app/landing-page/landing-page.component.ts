import { Component, OnInit } from '@angular/core';
import { CascadeModalComponent } from '../projects/cascade-modal/cascade-modal.component';
import { PrateModalComponent } from '../projects/prate-modal/prate-modal.component';
import { MototraxWebModalComponent } from '../projects/mototrax-web-modal/mototrax-web-modal.component';
import { MototraxMobileModalComponent } from '../projects/mototrax-mobile-modal/mototrax-mobile-modal.component';
import { ArtOfDreamsModalComponent } from '../projects/artofdreams-modal/artofdreams-modal.component';
import { PevoModalComponent } from '../projects/pevo-modal/pevo-modal.component';
import { PiHomescreenModalComponent } from '../projects/pihomescreen-modal/pihomescreen-modal.component';
import { GlobalstarModalComponent } from '../projects/globalstar-modal/globalstar-modal.component';
import { AirPropModalComponent } from '../projects/airprop-modal/airprop-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'prf-landing-page',
    templateUrl: 'landing-page.component.html',
    styleUrls: ['./landing-page.component.scss']
})

export class LandingPageComponent implements OnInit {
    constructor(private modal: NgbModal) { }

    ngOnInit() { }

    openProjectModal(project) {
        switch (project) {
            case 'cascade':
                this.modal.open(CascadeModalComponent, { size: 'lg' });
                break;
            case 'prate':
                this.modal.open(PrateModalComponent, { size: 'lg' });
                break;
            case 'mototrax-web':
                this.modal.open(MototraxWebModalComponent, { size: 'lg' });
                break;
            case 'mototrax-mobile':
                this.modal.open(MototraxMobileModalComponent, { size: 'lg' });
                break;
            case 'artofdreams':
                this.modal.open(ArtOfDreamsModalComponent, { size: 'lg' });
                break;
            case 'pevo':
                this.modal.open(PevoModalComponent, { size: 'lg' });
                break;
            case 'pihomescreen':
                this.modal.open(PiHomescreenModalComponent, { size: 'lg' });
                break;
            case 'globalstar':
                this.modal.open(GlobalstarModalComponent, { size: 'lg' });
                break;
            case 'airprop':
                this.modal.open(AirPropModalComponent, { size: 'lg' });
                break;
        }
    }
}