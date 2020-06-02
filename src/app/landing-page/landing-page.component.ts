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
                top: '0px'
            })),
            state('hide', style({
                top: '-100%'
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

export class LandingPageComponent implements OnInit {
    scrollPos: number;
    selectedTab: string = 'HOME';
    showHideMain: boolean = true;
    showHideAbout: boolean = false;

    firstLoad: boolean = true;
    emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
    messageForm: SubmittableFormGroup = new SubmittableFormGroup({
        email: new FormControl('', [Validators.required, Validators.maxLength(60), Validators.pattern(this.emailRegex)]),
        message: new FormControl('', [Validators.required, Validators.maxLength(250), Validators.minLength(5)]),
    });

    loadingRequest: Observable<any>;
    messageFormMessages = [];
    messageLeftLength;

    @ViewChild('homeAnchor') homeAnchor: ElementRef;
    @ViewChild('aboutMeAnchor') aboutMeAnchor: ElementRef;
    @ViewChild('projectsAnchor') projectsAnchor: ElementRef;
    @ViewChild('contactAnchor') contactAnchor: ElementRef;


    constructor(private modal: NgbModal) {
        // this.onScroll = debounce(this.onScroll, 50, { leading: false, trailing: true });
        this.selectedTab = 'ABOUT_ME';

        // Track characters on message
        this.messageForm.controls['message'].valueChanges.subscribe((v) => {
            if (!v) {
                this.messageLeftLength = null;

                return;
            }

            this.messageLeftLength = 250 - v.length;

            if (this.messageLeftLength < 0) {
                this.messageLeftLength = 'Limit exceeded';
            }
        });
    }

    ngOnInit() { }

    hideMainPage() {
        this.showHideAbout = true;
        this.showHideMain = false;
    }

    openProjectModal(project) {
        let modalRef;

        switch (project) {
            case 'cascade':
                modalRef = this.modal.open(CascadeModalComponent, { size: 'lg' });
                break;
            case 'prate':
                modalRef = this.modal.open(PrateModalComponent, { size: 'lg' });
                break;
            case 'mototrax-web':
                modalRef = this.modal.open(MototraxWebModalComponent, { size: 'lg' });
                break;
            case 'mototrax-mobile':
                modalRef = this.modal.open(MototraxMobileModalComponent, { size: 'lg' });
                break;
            case 'artofdreams':
                modalRef = this.modal.open(ArtOfDreamsModalComponent, { size: 'lg' });
                break;
            case 'pevo':
                modalRef = this.modal.open(PevoModalComponent, { size: 'lg' });
                break;
            case 'pihomescreen':
                modalRef = this.modal.open(PiHomescreenModalComponent, { size: 'lg' });
                break;
            case 'globalstar':
                modalRef = this.modal.open(GlobalstarModalComponent, { size: 'lg' });
                break;
            case 'airprop':
                modalRef = this.modal.open(AirPropModalComponent, { size: 'lg' });
                break;
        }
    }


    @HostListener('window:scroll', ['$event'])
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
            }
        }

        if (aboutMeTop === 0) {
            this.selectedTab = 'ABOUT_ME';
        }

        const projectsAnchor = this.projectsAnchor.nativeElement;
        const projectsViewportOffset = projectsAnchor.getBoundingClientRect();
        const projectsTop = projectsViewportOffset.top;
        if (projectsTop <= 0) {
            this.selectedTab = 'PROJECTS';
        }

        const contactAnchor = this.contactAnchor.nativeElement;
        const contactViewportOffset = contactAnchor.getBoundingClientRect();
        const contactTop = contactViewportOffset.top;
        if (contactTop <= 0) {
            this.selectedTab = 'CONTACT';
        }
    }

    sendMessage() {
        this.messageFormMessages = [];
        this.messageForm['submitted'] = true;

        if (!this.messageForm.valid) {
            return;
        }

        const body = {
            reply_to: this.messageForm.value.email,
            from_name: this.messageForm.value.email,
            to_name: 'mattb103190@gmail.com',
            message_html: this.messageForm.value.message
        };

        var serviceId = 'gmail';
        var templateId = 'template_Q1G6AEQ1';
        var userId = 'user_5g3SDUEDB23GcN9UDqcFG';

        emailjs.send(serviceId, templateId, body, userId)
            .then((response) => {
                this.messageForm['submitted'] = false;

                this.messageFormMessages.push('Message sent!');

                this.messageForm.reset();

            }, (err) => {
                this.messageForm['submitted'] = false;

                this.messageFormMessages.push('Failed to send message');
            });
    }
}