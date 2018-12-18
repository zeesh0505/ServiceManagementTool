import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'jobSheet-search',
    templateUrl: './jobSheet-search.component.html',
    styleUrls: ['./jobSheet-search.component.scss'],
    animations: [routerTransition()]
})
export class JobSheetSearchComponent implements OnInit {
    jobSheetDetail: any;
    constructor() {}

    ngOnInit() {
        this.jobSheetDetail = [
            {
                "jbDate": "13/12/2018",
                "jbNo": "1234556",
                "imeiNo": "19812486997",
                "mobNo": "12345567890",
                "deviceName": "xyz",
                "custName": "asdfsdf",
                "jbstatus": "close",
                "tat": "y",
                "escltdTo": "opg",
                "crrntAssn": "yhn"
            },
            {
                "jbDate": "13/12/2018",
                "jbNo": "1234556",
                "imeiNo": "19812486997",
                "mobNo": "12345567890",
                "deviceName": "xyzafz",
                "custName": "invd",
                "jbstatus": "open",
                "tat": "y",
                "escltdTo": "close",
                "crrntAssn": "yhn"
            },
            {
                "jbDate": "13/12/2018",
                "jbNo": "1234556",
                "imeiNo": "19812486997",
                "mobNo": "12345567890",
                "deviceName": "xyz",
                "custName": "abc",
                "jbstatus": "open",
                "tat": "y",
                "escltdTo": "opg",
                "crrntAssn": "yhn"
            }
        ]
    }
}
