import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

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
    @Input() selectedTab: string;
    isCollapsed: boolean = true;
    showMenu: boolean = true;

    constructor() { }

    ngOnInit() { }
}