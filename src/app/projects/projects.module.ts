import { NgModule } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { SharedModule } from '../shared/shared.module';
import { CascadeModalComponent } from './cascade-modal/cascade-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LightboxModule } from 'ngx-lightbox';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [
        BrowserModule,
        SharedModule,
        NgbModule,
        LightboxModule
    ],
    exports: [
    ],
    declarations: [
        CascadeModalComponent,
        ProjectsComponent
    ],
    providers: [],
    entryComponents: [
        CascadeModalComponent
    ]
})
export class ProjectsModule { }
