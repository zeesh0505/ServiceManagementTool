import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'jobSheet-search',
    templateUrl: './jobSheet-search.component.html',
    styleUrls: ['./jobSheet-search.component.scss'],
    animations: [routerTransition()]
})
export class JobSheetSearchComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
