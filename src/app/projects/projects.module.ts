import { NgModule } from '@angular/core';
import { CascadeComponent } from './cascade/cascade.component';
import { MiscProjectsComponent } from './misc-projects/misc-projects.component';
import { MototraxComponent } from './mototrax/mototrax.component';
import { MototraxMobileComponent } from './mototrax-mobile/mototrax-mobile.component';
import { PrateComponent } from './prate/prate.component';
import { ProjectsComponent } from './projects/projects.component';


@NgModule({
    imports: [],
    exports: [],
    declarations: [
        CascadeComponent,
        MiscProjectsComponent,
        MototraxComponent,
        MototraxMobileComponent,
        PrateComponent,
        ProjectsComponent
    ],
    providers: [],
})
export class ProjectsModule { }
