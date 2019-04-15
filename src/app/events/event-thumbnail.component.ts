import { Component, Input, Output, EventEmitter} from '@angular/core';
import { IEvent } from './shared';

@Component({
    selector: 'event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styles : [
        `
        .pad-left{
            margin-left: 10px;
        }
        .well div{
            color: #bbb;
        }
        .thumbnail {
            min-height: 210px;
        }
        `
    ]

})
export class EventThumbnailComponent {
    // here input decorator expects the value which should be passed from parent component
    @Input()
    event: IEvent;

    display: string = 'Reference Parameter binding from child to parent';

    @Output() eventClick = new EventEmitter();

    handleClickMe() {
        this.eventClick.emit(this.event.name);
    }

    logFoo() {
        console.log('Foo');
    }

}
