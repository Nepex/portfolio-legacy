import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CascadeModalComponent } from '../cascade-modal/cascade-modal.component';
import { PrateModalComponent } from '../prate-modal/prate-modal.component';
import { MototraxWebModalComponent } from '../mototrax-web-modal/mototrax-web-modal.component';
import { MototraxMobileModalComponent } from '../mototrax-mobile-modal/mototrax-mobile-modal.component';
import { ArtOfDreamsModalComponent } from '../artofdreams-modal/artofdreams-modal.component';
import { PevoModalComponent } from '../pevo-modal/pevo-modal.component';
import { PiHomescreenModalComponent } from '../pihomescreen-modal/pihomescreen-modal.component';
import { GlobalstarModalComponent } from '../globalstar-modal/globalstar-modal.component';
import { AirPropModalComponent } from '../airprop-modal/airprop-modal.component';

@Component({
    selector: 'prf-projects',
    templateUrl: 'projects.component.html',
    styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {
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