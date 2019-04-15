import { AuthService } from './../user/auth.service';
import { Component, OnInit } from '@angular/core';
import { ISession, EventService, IEvent } from '../events';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles: [
        `
        .nav.navbar-nav {
            font-size:15px;
        }
        #searchForm{
            margin-right: 100px;
        }
        @media(max-width:1200px){
            #searchForm{
                display:none;
            }
        }
        li>a.active{
            color:#f97924;
        }
        `
    ]

})
export class NavbarComponent implements OnInit {
// tslint:disable-next-line: no-inferrable-types
    searchTerm: string = '';
    foundSessions: ISession[];
    events: IEvent[];

    constructor(private authService: AuthService, private eventService: EventService) {
    }

    ngOnInit() {
        this.eventService.getEvents().subscribe((eventList) => {
            this.events = eventList;
        });
    }

    searchSessions(searchTerm) {
        this.eventService.searchSessions(searchTerm).subscribe(
            sessions => {
                this.foundSessions = sessions;
            }
        );
    }
}
