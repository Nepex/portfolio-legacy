// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// NPM
import { LightboxModule } from 'ngx-lightbox';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// App
import { CascadeModalComponent } from './cascade-modal/cascade-modal.component';
import { MototraxWebModalComponent } from './mototrax-web-modal/mototrax-web-modal.component';
import { MototraxMobileModalComponent } from './mototrax-mobile-modal/mototrax-mobile-modal.component';
import { PiHomescreenModalComponent } from './pihomescreen-modal/pihomescreen-modal.component';
import { PrateModalComponent } from './prate-modal/prate-modal.component';
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
        CascadeModalComponent,
        MototraxMobileModalComponent,
        MototraxWebModalComponent,
        PiHomescreenModalComponent,
        PrateModalComponent
    ],
    providers: [],
    entryComponents: [
        CascadeModalComponent,
        MototraxMobileModalComponent,
        MototraxWebModalComponent,
        PiHomescreenModalComponent,
        PrateModalComponent
    ]
})
export class ProjectsModule { }
