import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { debounce } from 'lodash';

@Component({
    selector: 'prf-main-nav',
    templateUrl: 'main-nav.component.html',
    styleUrls: ['./main-nav.component.scss'],
    animations: [
        trigger('showHide', [
            state('show', style({
                top: '0px'
            })),
            state('hide', style({
                top: '-42px'
            })),
            transition('show => hide', [
                animate('.25s')
            ]),
            transition('hide => show', [
                animate('.25s')
            ]),
        ]),
        trigger('createDestroy', [
            state('create', style({
                display: 'block'
            })),
            state('destroy', style({
                display: 'none'
            })),
            transition('create => destroy', [
                animate('.25s')
            ]),
            transition('destroy => create', [
                animate('.0s')
            ]),
        ]),
    ]
})

export class MainNavComponent implements OnInit {
    isCollapsed: boolean = true;
    showMenu: boolean = true;

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