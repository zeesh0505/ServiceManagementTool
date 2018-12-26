import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'create-jobsheet',
    templateUrl: './create-jobsheet.component.html',
    styleUrls: ['./create-jobsheet.component.scss'],
    animations: [routerTransition()]
})
export class CreateJobsheetComponent implements OnInit {
    closeResult: string;
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
