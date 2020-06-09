import { Component, OnInit, HostListener, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { debounce } from 'lodash';

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

export class MainNavComponent implements OnInit {
    @Input() selectedTab: string;
    @Input() showMenu: boolean;

    isCollapsed: boolean = true;

    constructor() { 
        // delay resize function so it doesn't get called too many times
        this.onResize = debounce(this.onResize, 100, {leading: false, trailing: true});
    }

    ngOnInit() { }

    @HostListener('window:resize', ['$event'])
    onResize() {
        if (window.innerWidth < 992) {
            this.showMenu = true;
        }
    }
}