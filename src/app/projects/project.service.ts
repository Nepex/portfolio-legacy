// Angular
import { Injectable } from '@angular/core';

// App
import { Project } from './project';

// Service for grabbing project data
@Injectable()
export class ProjectService {
    projectData: Project[] = [
        {
            id: 'prate',
            title: 'Prate',
            description: 'Prate is an interest based chat matching application. It has a progress leveling system that gives users experience based on their time spent in chat and awards them accordingly. Users have a fully customizable experience being able to change their picture, colors, interests, and font.',
            techUsed: 'Angular, HTML, CSS, Bootstrap, NodeJS, pgSQL, Websockets',
            sourceCode: { frontEndUrl: 'https://github.com/Nepex/prate', backEndUrl: null },
            isMobileProject: false,
            images: [
                {
                    src: '../../../assets/images/portfolio/portfolio-imgs/prate-home.png',
                    thumb: '../../../assets/images/portfolio/portfolio-imgs/prate-home.png',
                    caption: 'Landing page for Prate.'
                },
                {
                    src: '../../../assets/images/portfolio/portfolio-imgs/prate-signup.png',
                    thumb: '../../../assets/images/portfolio/portfolio-imgs/prate-signup.png',
                    caption: 'Signup page where user would create an account.'
                },
                {
                    src: '../../../assets/images/portfolio/portfolio-imgs/prate-usersettings.png',
                    thumb: '../../../assets/images/portfolio/portfolio-imgs/prate-usersettings.png',
                    caption: 'Where a user could change their name, avatar, interests, colors, font, and password.'
                },
                {
                    src: '../../../assets/images/portfolio/portfolio-imgs/prate-matching.png',
                    thumb: '../../../assets/images/portfolio/portfolio-imgs/prate-matching.png',
                    caption: 'Queued up screen while matching.'
                },
                {
                    src: '../../../assets/images/portfolio/portfolio-imgs/prate-matchedwith.png',
                    thumb: '../../../assets/images/portfolio/portfolio-imgs/prate-matchedwith.png',
                    caption: 'When a match is found, user is alerted.'
                },
                {
                    src: '../../../assets/images/portfolio/portfolio-imgs/prate-chat-lowres.png',
                    thumb: '../../../assets/images/portfolio/portfolio-imgs/prate-chat-lowres.png',
                    caption: 'Chatting interface.'
                },
                {
                    src: '../../../assets/images/portfolio/portfolio-imgs/prate-leftchat.png',
                    thumb: '../../../assets/images/portfolio/portfolio-imgs/prate-leftchat.png',
                    caption: 'When either person leaves the chat, an alert is issued, and experience is awarded.'
                }
            ],

        },
        {
            id: 'mototrax-web',
            title: 'MotoTrax',
            description: 'MotoTrax was a project I worked on from 2016 until 2019 at AngelTrax. It\'s the complete package for organizations with bus or vehicle fleets to manage and monitor their vehicles. I primarily worked on the frontend. All assets belong to AngelTrax.',
            techUsed: 'Angular, HTML, CSS, Bootstrap, NodeJS, pgSQL, Websockets',
            sourceCode: { frontEndUrl: null, backEndUrl: null },
            isMobileProject: false,
            images: [
                {
                    src: '../../../assets/images/portfolio/portfolio-imgs/mototrax-web-dashboard.png',
                    thumb: '../../../assets/images/portfolio/portfolio-imgs/mototrax-web-dashboard.png',
                    caption: 'Displayed vehicle overview and recent events.'
                },
                {
                    src: '../../../assets/images/portfolio/portfolio-imgs/mototrax-web-fleet.png',
                    thumb: '../../../assets/images/portfolio/portfolio-imgs/mototrax-web-fleet.png',
                    caption: 'Displayed vehicles within an organization.'
                },
                {
                    src: '../../../assets/images/portfolio/portfolio-imgs/mototrax-web-vehicle.png',
                    thumb: '../../../assets/images/portfolio/portfolio-imgs/mototrax-web-vehicle.png',
                    caption: 'Let the user view a single vehicle.'
                },
                {
                    src: '../../../assets/images/portfolio/portfolio-imgs/mototrax-web-events.png',
                    thumb: '../../../assets/images/portfolio/portfolio-imgs/mototrax-web-events.png',
                    caption: 'Listed out recent events for the user to filter and view.'
                },
                {
                    src: '../../../assets/images/portfolio/portfolio-imgs/mototrax-web-mapevent.png',
                    thumb: '../../../assets/images/portfolio/portfolio-imgs/mototrax-web-mapevent.png',
                    caption: 'Mapped out chosen events by the user.'
                },
                {
                    src: '../../../assets/images/portfolio/portfolio-imgs/mototrax-web-livetracking-lowres.png',
                    thumb: '../../../assets/images/portfolio/portfolio-imgs/mototrax-web-livetracking-lowres.png',
                    caption: 'An animated map of all current vehicle movement within the fleet.'
                },
                {
                    src: '../../../assets/images/portfolio/portfolio-imgs/mototrax-web-geofences.png',
                    thumb: '../../../assets/images/portfolio/portfolio-imgs/mototrax-web-geofences.png',
                    caption: 'Allowed the user to create and edit vehicle geofences.'
                },
                {
                    src: '../../../assets/images/portfolio/portfolio-imgs/mototrax-web-route.png',
                    thumb: '../../../assets/images/portfolio/portfolio-imgs/mototrax-web-route.png',
                    caption: 'Let user edit vehicle routes.'
                },
                {
                    src: '../../../assets/images/portfolio/portfolio-imgs/mototrax-web-changeorg.png',
                    thumb: '../../../assets/images/portfolio/portfolio-imgs/mototrax-web-changeorg.png',
                    caption: 'Organization swapper.'
                },
                {
                    src: '../../../assets/images/portfolio/portfolio-imgs/mototrax-web-admin.png',
                    thumb: '../../../assets/images/portfolio/portfolio-imgs/mototrax-web-admin.png',
                    caption: 'Complete admin module.'
                },
            ]
        },
        {
            id: 'mototrax-mobile',
            title: 'MotoTrax Mobile',
            description: 'Mobile version of Mototrax I helped work on at AngelTrax. It is a cross-platform application for iOS and Android. It contains basic features from the MotoTrax web version. I primarily coded the functionality and implemented layouts made by our marketing department. All assets belong to AngelTrax.',
            techUsed: 'Xamarin, XAML, C#',
            sourceCode: { frontEndUrl: null, backEndUrl: null },
            isMobileProject: true,
            images: [
                {
                    src: '../../../assets/images/portfolio/portfolio-imgs/mototrax-mobile-splash.png',
                    thumb: '../../../assets/images/portfolio/portfolio-imgs/mototrax-mobile-splash.png',
                    caption: 'Splash screen while app is initializing.'
                },
                {
                    src: '../../../assets/images/portfolio/portfolio-imgs/mototrax-mobile-login.png',
                    thumb: '../../../assets/images/portfolio/portfolio-imgs/mototrax-mobile-login.png',
                    caption: 'Login screen.'
                },
                {
                    src: '../../../assets/images/portfolio/portfolio-imgs/mototrax-mobile-menu.png',
                    thumb: '../../../assets/images/portfolio/portfolio-imgs/mototrax-mobile-menu.png',
                    caption: 'Flyout menu.'
                },
                {
                    src: '../../../assets/images/portfolio/portfolio-imgs/mototrax-mobile-map.png',
                    thumb: '../../../assets/images/portfolio/portfolio-imgs/mototrax-mobile-map.png',
                    caption: 'Animated map for viewing vehicle movement.'
                },
                {
                    src: '../../../assets/images/portfolio/portfolio-imgs/mototrax-mobile-search.png',
                    thumb: '../../../assets/images/portfolio/portfolio-imgs/mototrax-mobile-search.png',
                    caption: 'Filter popup modal.'
                }
            ]
        },
        {
            id: 'cascade',
            title: 'Cascade',
            description: 'Cascade was a browser game I made back in 2016. I designed tile-based maps with Tiled which allowed the user to freely walk around with an animated character. The user could recruit a variety of classes. Cascade also featured shops, quests, inventory, equipment management, scenes, a messaging system, and a world map overview. It was made responsive to be compatible with mobile and desktop.',
            techUsed: 'Angular, HTML, CSS, Bootstrap, PHP, mySQLi',
            sourceCode: { frontEndUrl: 'https://github.com/Nepex/cascade', backEndUrl: 'https://github.com/Nepex/cascade-api' },
            isMobileProject: false,
            images: [
                {
                    src: '../../../assets/images/portfolio/portfolio-imgs/cascade-battle.png',
                    thumb: '../../../assets/images/portfolio/portfolio-imgs/cascade-battle.png',
                    caption: 'A random encounter battle scene.'
                },
                {
                    src: '../../../assets/images/portfolio/portfolio-imgs/cascade-party.png',
                    thumb: '../../../assets/images/portfolio/portfolio-imgs/cascade-party.png',
                    caption: 'Party management, where a user would manage spells, equipment, and stats.'
                },
                {
                    src: '../../../assets/images/portfolio/portfolio-imgs/cascade-travel.png',
                    thumb: '../../../assets/images/portfolio/portfolio-imgs/cascade-travel.png',
                    caption: 'An interactive map where the user can walk around and encounter random enemies.'
                },
                {
                    src: '../../../assets/images/portfolio/portfolio-imgs/cascade-eqpt.png',
                    thumb: '../../../assets/images/portfolio/portfolio-imgs/cascade-eqpt.png',
                    caption: 'Here a user can manage equipment for specific party members.'
                },
                {
                    src: '../../../assets/images/portfolio/portfolio-imgs/cascade-store.png',
                    thumb: '../../../assets/images/portfolio/portfolio-imgs/cascade-store.png',
                    caption: 'An interactive shop where a user could buy and sell items.'
                },
            ]
        },
        {
            id: 'pi-homescreen',
            title: 'PI Homescreen',
            description: 'Custom homescreen. It displays time, date, day-by-day weather, and has a banner that pops up for weather warnings and other misc. emergencies.',
            techUsed: 'HTML, CSS, JavaScript',
            sourceCode: { frontEndUrl: 'https://github.com/Nepex/pi-homescreen', backEndUrl: null },
            isMobileProject: false,
            images: [
                {
                    src: '../../../assets/images/portfolio/portfolio-imgs/pi-homescreen-lowres.png',
                    thumb: '../../../assets/images/portfolio/portfolio-imgs/pi-homescreen-lowres.png',
                    caption: 'Homescreen.'
                }
            ]
        },
        {
            id: 'poll-runner',
            title: 'Poll Runner',
            description: 'Poll Runner was a coding project I did that would allow an admin to create polls with questions and send it to multiple users. Users would receive email notifications and be able to take the polls. Data would be displayed for the user and admin on a dashboard.',
            techUsed: 'Angular, HTML, CSS, Bootstrap, Node, pgSQL',
            sourceCode: { frontEndUrl: 'https://github.com/Nepex/poll-runner', backEndUrl: 'https://github.com/Nepex/poll-runner' },
            isMobileProject: false,
            images: [
                {
                    src: '../../../assets/images/portfolio/portfolio-imgs/poll-runner-create.png',
                    thumb: '../../../assets/images/portfolio/portfolio-imgs/poll-runner-create.png',
                    caption: 'Create poll.'
                },
                {
                    src: '../../../assets/images/portfolio/portfolio-imgs/poll-runner-send.png',
                    thumb: '../../../assets/images/portfolio/portfolio-imgs/poll-runner-send.png',
                    caption: 'Send poll.'
                },
                {
                    src: '../../../assets/images/portfolio/portfolio-imgs/poll-runner-take.png',
                    thumb: '../../../assets/images/portfolio/portfolio-imgs/poll-runner-take.png',
                    caption: 'Take poll.'
                },
                {
                    src: '../../../assets/images/portfolio/portfolio-imgs/poll-runner-dashboard.png',
                    thumb: '../../../assets/images/portfolio/portfolio-imgs/poll-runner-dashboard.png',
                    caption: 'Admin dashboard.'
                },
                {
                    src: '../../../assets/images/portfolio/portfolio-imgs/poll-runner-view-user.png',
                    thumb: '../../../assets/images/portfolio/portfolio-imgs/poll-runner-view-user.png',
                    caption: 'View user polls taken.'
                },
            ]
        },
    ];

    getProjectData(id: string): Project {
        return this.projectData.filter(proj => proj.id === id)[0];
    }
}
