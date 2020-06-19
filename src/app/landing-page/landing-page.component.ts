// Angular
import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

// NPM
import { throttle } from 'lodash';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// App
import { CascadeModalComponent } from '../projects/cascade-modal/cascade-modal.component';
import { MototraxMobileModalComponent } from '../projects/mototrax-mobile-modal/mototrax-mobile-modal.component';
import { MototraxWebModalComponent } from '../projects/mototrax-web-modal/mototrax-web-modal.component';
import { PiHomescreenModalComponent } from '../projects/pihomescreen-modal/pihomescreen-modal.component';
import { PrateModalComponent } from '../projects/prate-modal/prate-modal.component';

// Main portfolio landing page
@Component({
    selector: 'prf-landing-page',
    templateUrl: 'landing-page.component.html',
    styleUrls: ['./landing-page.component.scss'],
    animations: [
        trigger('showHideSplash', [
            state('show', style({
                opacity: '1',
                display: 'block'
            })),
            state('hide', style({
                opacity: '0',
                display: 'none'
            })),
            transition('show => hide', [
                animate('.25s')
            ]),
            transition('hide => show', [
                animate('.25s')
            ]),
        ]),
        trigger('showHideAbout', [
            state('show', style({
                opacity: '1.0'
            })),
            state('hide', style({
                opacity: '0.0'
            })),
            transition('show => hide', [
                animate('.75s')
            ]),
            transition('hide => show', [
                animate('.75s')
            ]),
        ]),
        trigger('slideInKnowledge', [
            state('show', style({
                bottom: '0px'
            })),
            state('hide', style({
                bottom: '-500px'
            })),
            transition('show => hide', [
                animate('0s')
            ]),
            transition('hide => show', [
                animate('.5s')
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
        trigger('fadeInOut', [
            transition(':enter', [
                style({ opacity: '0' }),
                animate('300ms ease-in', style({ opacity: '1.0' }))
            ]),
            transition(':leave', [
                animate('300ms ease-in', style({ opacity: '0' }))
            ])
        ])
    ]
})

export class LandingPageComponent implements OnInit {
    // Element refs
    @ViewChild('homeAnchor') homeAnchor: ElementRef;
    @ViewChild('aboutMeAnchor') aboutMeAnchor: ElementRef;
    @ViewChild('projectsAnchor') projectsAnchor: ElementRef;
    @ViewChild('contactAnchor') contactAnchor: ElementRef;

    // Host listeners
    @HostListener("window:scroll", [])
    onWindowScroll() {
        this.throttledScroll();
    }

    throttledScroll = throttle(() => this.onScroll(), 200, {});

    // UI
    selectedTab: string = 'HOME';

    showSplash: boolean = true;
    showAbout: boolean = false;
    showKnowledge: boolean = true;
    showBackToTop: boolean = false;
    showMenu: boolean = false;
    showDiscId: boolean = false;
    showSteamId: boolean = false;

    scrollPos: number;

    frontEndRank: number = 0;
    backEndRank: number = 0;
    programmingRank: number = 0;

    constructor(private modal: NgbModal) { }

    ngOnInit() {
        this.selectedTab = 'ABOUT_ME';
    }

    // Select appropriate tab while scrolling
    onScroll() {
        let aboutMeFromTop = this.aboutMeAnchor.nativeElement.getBoundingClientRect().top,
            projectsFromTop = this.projectsAnchor.nativeElement.getBoundingClientRect().top;

        this.scrollPos = aboutMeFromTop;

        if (this.scrollPos <= -1) {
            this.hideSplash();
            this.loadElementsSlow();
        }

        if (this.scrollPos < 0) {
            this.showBackToTop = true;
        }

        if (aboutMeFromTop === 0) {
            this.selectedTab = 'ABOUT_ME';
            this.showBackToTop = false;
        }

        if (projectsFromTop <= 0) {
            this.selectedTab = 'PROJECTS';
        }

        // If at bottom, select contact tab
        if (window.scrollY === document.body.scrollHeight - window.innerHeight) {
            this.selectedTab = 'CONTACT'
        }
    }

    openProjectModal(project: string): void {
        let modal;

        switch (project) {
            case 'cascade':
                modal = CascadeModalComponent;
                break;
            case 'prate':
                modal = PrateModalComponent;
                break;
            case 'mototrax-web':
                modal = MototraxWebModalComponent;
                break;
            case 'mototrax-mobile':
                modal = MototraxMobileModalComponent;
                break;
            case 'pihomescreen':
                modal = PiHomescreenModalComponent;
                break;
        }

        this.modal.open(modal, { size: 'lg', backdrop: 'static', keyboard: false, windowClass: 'modal-holder' });
    }

    // Hide splash page and animate in other content
    hideSplash() {
        this.showSplash = false;
        this.showAbout = true;
        this.showKnowledge = true;
    }

    // Slide in elements slow
    loadElementsSlow() {
        setTimeout(() => {
            this.showMenu = true;
            this.frontEndRank = 90;
            this.backEndRank = 70;
            this.programmingRank = 60;
        }, 200);
    }
}