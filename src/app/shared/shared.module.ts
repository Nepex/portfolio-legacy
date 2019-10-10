import { NgModule } from '@angular/core';
import { MainNavComponent } from './main-nav/main-nav.component';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OffClickDirective } from './off-click-directive/off-click.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormValidationMsgsComponent } from './form-validation-msgs/form-validation-msgs.component';


@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        BrowserAnimationsModule
    ],
    exports: [
        MainNavComponent,
        OffClickDirective,
        FormValidationMsgsComponent
    ],
    declarations: [
        MainNavComponent,
        OffClickDirective,
        FormValidationMsgsComponent
    ],
    providers: [],
})
export class SharedModule { }
