import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CascadeModalComponent } from '../cascade-modal/cascade-modal.component';

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
        }
    }
}