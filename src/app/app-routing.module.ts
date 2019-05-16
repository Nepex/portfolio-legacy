import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProjectsModule } from './projects/projects.module';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: '*', component: LandingPageComponent }

];

@NgModule({
  imports: [
      RouterModule.forRoot(routes),
      ProjectsModule
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }