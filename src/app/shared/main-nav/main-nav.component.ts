// Angular
import { Component, HostListener, Input } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';

// NPM
import { throttle } from 'lodash';

@Component({
    selector: 'prf-main-nav',
    templateUrl: 'main-nav.component.html',
    styleUrls: ['./main-nav.component.scss'],
    animations: [
        trigger('fadeInOut', [
            transition(':enter', [
                style({ top: '-42px' }),
                animate('300ms ease-in', style({ top: '0px' }))
            ]),
            transition(':leave', [
                animate('300ms ease-in', style({ top: '-42px' }))
            ])
        ])
    ]
})

export class MainNavComponent {
    @Input() selectedTab: string;
    @Input() showMenu: boolean;

    isCollapsed: boolean = true;

    @HostListener("window:scroll", [])
    onWindowResize() {
        this.throttledResize();
    }

    throttledResize = throttle(() => this.onResize(), 200, {});

    constructor() { }

    @HostListener('window:resize', ['$event'])
    onResize() {
        if (window.innerWidth < 992) {
            this.showMenu = true;
        }
    }
}