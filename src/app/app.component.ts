import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Subscription } from 'rxjs';

@Component({
  selector: 'prf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('showHide', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0,
        display: 'none'
      })),
      transition('show => hide', [
        animate('.25s')
      ]),
    ]),
  ],
})
export class AppComponent implements OnDestroy {
  isLoadingRoute;
  routerSub: Subscription;

  constructor(private router: Router) {
    this.routerSub = this.router.events.subscribe((event: any) => {
      this._navigationInterceptor(event);

      if (event instanceof NavigationStart) {
        if (event.navigationTrigger === 'popstate') {
          return;
        }

        this.isLoadingRoute = true;
      }
    });
  }

  ngOnDestroy() {
    this.routerSub.unsubscribe();
  }

//   onActivate(event) {
//     this.router.navigateByUrl('/');
// }

  private _navigationInterceptor(event: Event): void {

    if (event instanceof NavigationEnd || event instanceof NavigationCancel) {
      setTimeout(() => {
        this.isLoadingRoute = false;
      }, 250);
    }
  }
}
