import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { CascadeModalComponent } from '../projects/cascade-modal/cascade-modal.component';
import { PrateModalComponent } from '../projects/prate-modal/prate-modal.component';
import { MototraxWebModalComponent } from '../projects/mototrax-web-modal/mototrax-web-modal.component';
import { MototraxMobileModalComponent } from '../projects/mototrax-mobile-modal/mototrax-mobile-modal.component';
import { ArtOfDreamsModalComponent } from '../projects/artofdreams-modal/artofdreams-modal.component';
import { PevoModalComponent } from '../projects/pevo-modal/pevo-modal.component';
import { PiHomescreenModalComponent } from '../projects/pihomescreen-modal/pihomescreen-modal.component';
import { GlobalstarModalComponent } from '../projects/globalstar-modal/globalstar-modal.component';
import { AirPropModalComponent } from '../projects/airprop-modal/airprop-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { debounce } from 'lodash';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';

import emailjs from 'emailjs-com';

class SubmittableFormGroup extends FormGroup {
    /** Boolean - if form has been submitted */
    public submitted = false;
}

@Component({
    selector: 'prf-landing-page',
    templateUrl: 'landing-page.component.html',
    styleUrls: ['./landing-page.component.scss'],
    animations: [
        trigger('showHideMainPage', [
            state('show', style({
                opacity: '1'
            })),
            state('hide', style({
                opacity: '0'
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
    scrollPos: number;
    selectedTab: string = 'HOME';
    showHideMain: boolean = true;
    showHideAbout: boolean = false;
    showKnowledge: boolean = true;
    showBackToTop: boolean = false;
    showMenu: boolean = false;

    firstLoad: boolean = true;

    frontEndRank: number = 0;
    backEndRank: number = 0;
    programmingRank: number = 0;

    @ViewChild('homeAnchor') homeAnchor: ElementRef;
    @ViewChild('aboutMeAnchor') aboutMeAnchor: ElementRef;
    @ViewChild('projectsAnchor') projectsAnchor: ElementRef;
    @ViewChild('contactAnchor') contactAnchor: ElementRef;


    constructor(private modal: NgbModal) {
        // this.onScroll = debounce(this.onScroll, 50, { leading: false, trailing: true });
        this.selectedTab = 'ABOUT_ME';
    }

    ngOnInit() { //shitty
        setTimeout(() => {
            if (this.scrollPos < 0) {
                this.showKnowledge = true;
            } else {
                this.showKnowledge = false;
            }
        }, 500);
    }

    // hide splash page and animate in other content
    hideMainPage() {
        // to go back to normal scroll splash, remove overflow on styles.css and this line
        // document.body.style.overflow = 'scroll';
        this.showHideAbout = true;
        this.showHideMain = false;
        this.showKnowledge = true;
    }

    openProjectModal(project) {
        let modalRef;

        switch (project) {
            case 'cascade':
                modalRef = this.modal.open(CascadeModalComponent, { size: 'lg', backdrop: 'static', keyboard: false, windowClass: 'modal-holder' });
                break;
            case 'prate':
                modalRef = this.modal.open(PrateModalComponent, { size: 'lg', backdrop: 'static', keyboard: false, windowClass: 'modal-holder' });
                break;
            case 'mototrax-web':
                modalRef = this.modal.open(MototraxWebModalComponent, { size: 'lg', backdrop: 'static', keyboard: false, windowClass: 'modal-holder' });
                break;
            case 'mototrax-mobile':
                modalRef = this.modal.open(MototraxMobileModalComponent, { size: 'lg', backdrop: 'static', keyboard: false, windowClass: 'modal-holder' });
                break;
            case 'pihomescreen':
                modalRef = this.modal.open(PiHomescreenModalComponent, { size: 'lg', backdrop: 'static', keyboard: false, windowClass: 'modal-holder' });
                break;
        }
    }


    @HostListener('document:scroll', ['$event'])
    onScroll() {
        // const scrollY = window.pageYOffset

        // const homeAnchor = this.homeAnchor.nativeElement;
        // const homeViewportOffset = homeAnchor.getBoundingClientRect();
        // const homeTop = homeViewportOffset.top;
        // if (homeTop <= 0) {
        //     this.selectedTab = 'HOME';
        //     this.showArrow = true;
        //     this.showHideMain = true;
        // }

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
        console.log(this.scrollPos)

        const projectsAnchor = this.projectsAnchor.nativeElement;
        const projectsViewportOffset = projectsAnchor.getBoundingClientRect();
        const projectsTop = projectsViewportOffset.top;
        if (projectsTop <= 0) {
            this.selectedTab = 'PROJECTS';
        }

        const contactAnchor = this.contactAnchor.nativeElement;
        const contactViewportOffset = contactAnchor.getBoundingClientRect();
        const contactTop = contactViewportOffset.top;
        if (contactTop <= 0.5) {
            this.selectedTab = 'CONTACT';
        }
    }

    loadElementsSlow() {
        setTimeout(() => {
            this.showMenu = true;
            this.frontEndRank = 90;
            this.backEndRank = 70;
            this.programmingRank = 60;
        }, 200);
    }
}