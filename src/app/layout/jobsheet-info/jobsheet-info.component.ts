import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { trigger,style,transition,animate,keyframes,query,stagger,state } from '@angular/animations';

@Component({
    selector: 'jobsheet-info',
    templateUrl: './jobsheet-info.component.html',
    styleUrls: ['./jobsheet-info.component.scss'],
    animations: [routerTransition(),trigger('flyInOut', [
        // the "in" style determines the "resting" state of the element when it is visible.
          state('in', style({opacity: 1})),
    
          // fade in when created. this could also be written as transition('void => *')
          transition(':enter', [
            style({opacity: 0}),
            animate(1800)
          ]),
    
      ])]
})
export class JobsheetInfoComponent implements OnInit {
    closeResult: string;
    public msgDialog = true;
    public isCollapsedPanel1 = false;
    public isCollapsedPanel2 = false;
    constructor(private modalService: NgbModal) {}

    ngOnInit() {
        // open(content) {
        //     this.modalService.open(content).result.then((result) => {
        //         this.closeResult = `Closed with: ${result}`;
        //     }, (reason) => {
        //         this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        //     });
        // }

    }

    open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }
}
