// Angular
import { Component, Input } from '@angular/core';

// NPM
import { Lightbox } from 'ngx-lightbox';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

// App
import { Project } from '../project';

// Modal for showing a project
@Component({
    selector: 'prf-project-modal',
    templateUrl: 'project-modal.component.html',
    styleUrls: ['./project-modal.component.scss']
})
export class ProjectModalComponent {
    @Input() projectData: Project;

    constructor(public activeModal: NgbActiveModal, private lightbox: Lightbox) { }

    // Open lightbox image zoom
    open(index: number): void {
        this.lightbox.open(this.projectData.images, index, { centerVertically: true, fadeDuration: 0 });
    }

    // Close lightbox image zoom
    close(): void {
        this.lightbox.close();
    }
}