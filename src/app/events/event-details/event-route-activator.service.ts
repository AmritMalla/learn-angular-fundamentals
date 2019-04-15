// import { EventService } from './../shared/event.service';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// @Injectable()
// export class EventRouteActivator implements CanActivate {

//     constructor(private eventService: EventService, private router:Router) {
//     }

//     canActivate(route: ActivatedRouteSnapshot)
//          {
//             const eventExists = !!this.eventService.getEvent(+route.params['id']);

//             if(!eventExists){
//                 this.router.navigate(['404']);
//             }
//             return eventExists;
//     }
// }
