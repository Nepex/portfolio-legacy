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

@Component({
    selector: 'prf-landing-page',
    templateUrl: 'landing-page.component.html',
    styleUrls: ['./landing-page.component.scss']
})

export class LandingPageComponent implements OnInit {
    scrollPos: number;
    selectedTab: string = 'HOME';

    @ViewChild('homeAnchor') homeAnchor: ElementRef;
    @ViewChild('aboutMeAnchor') aboutMeAnchor: ElementRef;
    @ViewChild('projectsAnchor') projectsAnchor: ElementRef;

    constructor(private modal: NgbModal) {
        // this.onScroll = debounce(this.onScroll, 50, { leading: false, trailing: true });
    }

    ngOnInit() { }

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

        // modalRef.result.then(() => { }, () => {
        //     // terrible workaround for weird firefox scrolling issue on modal close
        //     (window.document.querySelector('body') as HTMLElement).style.scrollBehavior = 'auto';
        //     (window.document.querySelector('html') as HTMLElement).style.scrollBehavior = 'auto';

        //     window.scrollTo(0, this.scrollPos);

        //     (window.document.querySelector('body') as HTMLElement).style.scrollBehavior = 'smooth';
        //     (window.document.querySelector('html') as HTMLElement).style.scrollBehavior = 'smooth';
        // });
    }

    @HostListener('window:scroll', ['$event'])
    onScroll() {
        const scrollY = window.pageYOffset

        const homeAnchor = this.homeAnchor.nativeElement;
        const homeViewportOffset = homeAnchor.getBoundingClientRect();
        const homeTop = homeViewportOffset.top;
        if (homeTop <= 0) {
            this.selectedTab = 'HOME';
        }

        const aboutMeAnchor = this.aboutMeAnchor.nativeElement;
        const aboutMeViewportOffset = aboutMeAnchor.getBoundingClientRect();
        const aboutMeTop = aboutMeViewportOffset.top;
        if (aboutMeTop <= 0) {
            this.selectedTab = 'ABOUT_ME';
        }

        const projectsAnchor = this.projectsAnchor.nativeElement;
        const projectsViewportOffset = projectsAnchor.getBoundingClientRect();
        const projectsTop = projectsViewportOffset.top;
        if (projectsTop <= 0) {
            this.selectedTab = 'PROJECTS';
        }

        // terrible workaround for weird firefox scrolling issue on modal close
        // if (!scrollY) {
        //     return;
        // }

        this.scrollPos = scrollY;
    }
}