// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// NPM
import { LightboxModule } from 'ngx-lightbox';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// App
import { ProjectModalComponent } from './project-modal/project-modal.component';
import { ProjectService } from './project.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        BrowserModule,
        LightboxModule,
        NgbModule,
        SharedModule
    ],
    exports: [
    ],
    declarations: [
        ProjectModalComponent
    ],
    providers: [ProjectService],
    entryComponents: [
        ProjectModalComponent
    ]
})
export class ProjectsModule { }
