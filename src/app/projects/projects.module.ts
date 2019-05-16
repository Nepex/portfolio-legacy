import { NgModule } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { SharedModule } from '../shared/shared.module';
import { CascadeModalComponent } from './cascade-modal/cascade-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LightboxModule } from 'ngx-lightbox';
import { BrowserModule } from '@angular/platform-browser';
import { PrateModalComponent } from './prate-modal/prate-modal.component';
import { MototraxWebModalComponent } from './mototrax-web-modal/mototrax-web-modal.component';
import { MototraxMobileModalComponent } from './mototrax-mobile-modal/mototrax-mobile-modal.component';
import { ArtOfDreamsModalComponent } from './artofdreams-modal/artofdreams-modal.component';
import { PevoModalComponent } from './pevo-modal/pevo-modal.component';
import { PiHomescreenModalComponent } from './pihomescreen-modal/pihomescreen-modal.component';
import { GlobalstarModalComponent } from './globalstar-modal/globalstar-modal.component';
import { AirPropModalComponent } from './airprop-modal/airprop-modal.component';

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
        PrateModalComponent,
        ProjectsComponent,
        MototraxWebModalComponent,
        MototraxMobileModalComponent,
        ArtOfDreamsModalComponent,
        PevoModalComponent,
        PiHomescreenModalComponent,
        GlobalstarModalComponent,
        AirPropModalComponent
    ],
    providers: [],
    entryComponents: [
        CascadeModalComponent,
        PrateModalComponent,
        MototraxWebModalComponent,
        MototraxMobileModalComponent,
        ArtOfDreamsModalComponent,
        PevoModalComponent,
        PiHomescreenModalComponent,
        GlobalstarModalComponent,
        AirPropModalComponent
    ]
})
export class ProjectsModule { }
