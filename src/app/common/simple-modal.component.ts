import { JQ_TOKEN } from './jquery.service';
import { Component, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import { $ } from 'protractor';

@Component({
    selector: 'simple-modal',
    template: `
    <div class="modal fade" #modalcontainer id="{{elementId}}" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <h4 class="modal-title">{{title}}</h4>
            </div>
            <div class="modal-body" (click) = "closeModal()">
                    <ng-content></ng-content>
            </div>
          </div>
        </div>
      </div>

    `
})
export class SimpleModalComponent {
    @Input() title: string;
    @Input() elementId: string;
    @Input() closeOnBodyClick: string;
    @ViewChild('modalcontainer') containerEl: ElementRef;

// tslint:disable-next-line: no-shadowed-variable
    constructor(@Inject(JQ_TOKEN) private $: any) {
    }

    closeModal() {
        if (this.closeOnBodyClick.toLocaleLowerCase() === 'true') {
            this.$(this.containerEl.nativeElement).modal('hide');
        }
    }


}
