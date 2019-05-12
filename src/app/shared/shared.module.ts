import { NgModule } from '@angular/core';
import { MainNavComponent } from './main-nav/main-nav.component';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OffClickDirective } from './off-click-directive/off-click.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        BrowserAnimationsModule
    ],
    exports: [
        MainNavComponent,
        OffClickDirective
    ],
    declarations: [
        MainNavComponent,
        OffClickDirective
    ],
    providers: [],
})
export class SharedModule { }
