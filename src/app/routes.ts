import {
    EventDetailsComponent,
    EventListResolver,
    CreateEventComponent,
    CreateSessionComponent,
    EventResolver
} from './events/index';
import { EventsListComponent } from './events/events-list.component';
import { Routes, Resolve } from '@angular/router';
import { Error404Component } from './error/404.component';

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    {
        path: 'events', component: EventsListComponent, resolve: {
            events: EventListResolver
        }
    },
    { path: 'events/:id', component: EventDetailsComponent, resolve: {event: EventResolver} },
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: './user/user.module#UserModule' }
];
