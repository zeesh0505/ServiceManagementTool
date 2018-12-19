import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'create-jobsheet',
    templateUrl: './create-jobsheet.component.html',
    styleUrls: ['./create-jobsheet.component.scss'],
    animations: [routerTransition()]
})
export class CreateJobsheetComponent implements OnInit {
    public isCollapsedPanel1 = false;
    public isCollapsedPanel2 = false;
    constructor() {}

    ngOnInit() {}
}
