// Angular
import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

// NPM
// import { debounce } from 'lodash';
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
        trigger('showHideMainPage', [
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

    // UI
    selectedTab: string = 'HOME';

    showHideMain: boolean = true;
    showHideAbout: boolean = false;
    showKnowledge: boolean = true;
    showBackToTop: boolean = false;
    showMenu: boolean = false;
    showDiscId: boolean = false;
    showSteamId: boolean = false;

    firstLoad: boolean = true;
    scrollPos: number;

    frontEndRank: number = 0;
    backEndRank: number = 0;
    programmingRank: number = 0;

    constructor(private modal: NgbModal) {
        // this.onScroll = debounce(this.onScroll, 50, { leading: false, trailing: true });
        this.selectedTab = 'ABOUT_ME';
    }

    // If page is loaded in and scroll position is past the top, animate in elements automatically
    ngOnInit() {
        setTimeout(() => {
            if (this.scrollPos < 0) {
                this.showKnowledge = true;
            } else {
                this.showKnowledge = false;
            }
        }, 500);
    }

    // Open passed in project in a modal
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


    // Select appropriate tab while scrolling
    @HostListener('document:scroll', ['$event'])
    onScroll() {
        const aboutMeAnchor = this.aboutMeAnchor.nativeElement;
        const aboutMeViewportOffset = aboutMeAnchor.getBoundingClientRect();
        const aboutMeTop = aboutMeViewportOffset.top;
        if (aboutMeTop <= -1) {
            // workaround to get intro page to show on every load
            if (this.firstLoad) {
                this.firstLoad = false;
            } else {
                this.showHideMain = false;
                this.showHideAbout = true;
                this.showKnowledge = true;
                this.loadElementsSlow();
            }
        }

        if (aboutMeTop === 0) {
            this.selectedTab = 'ABOUT_ME';
            this.showBackToTop = false;
        }

        if (aboutMeTop < 0) {
            this.showBackToTop = true;
        }

        this.scrollPos = aboutMeTop;

        const projectsAnchor = this.projectsAnchor.nativeElement;
        const projectsViewportOffset = projectsAnchor.getBoundingClientRect();
        const projectsTop = projectsViewportOffset.top;
        if (projectsTop <= 0) {
            this.selectedTab = 'PROJECTS';
        }

        if (window.scrollY === document.body.scrollHeight - window.innerHeight) {
            this.selectedTab = 'CONTACT'
        }
    }

    // hide splash page and animate in other content
    hideMainPage() {
        this.showHideAbout = true;
        this.showHideMain = false;
        this.showKnowledge = true;
    }

    // Slide in elements
    loadElementsSlow() {
        setTimeout(() => {
            this.showMenu = true;
        }, 200);

        setTimeout(() => {
            this.frontEndRank = 90;
            this.backEndRank = 70;
            this.programmingRank = 60;
        }, 450);
    }
}