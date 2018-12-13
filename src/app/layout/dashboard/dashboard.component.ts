import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { LocalizationService } from '../../shared/services/localization.service';
import { from,Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public sub: Subscription;
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    constructor( private route: ActivatedRoute,private localization: LocalizationService) {
        // this.sliders.push(
        //     {
        //         imagePath: 'assets/images/slider1.jpg',
        //         label: 'First slide label',
        //         text:
        //             'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        //     },
        //     {
        //         imagePath: 'assets/images/slider2.jpg',
        //         label: 'Second slide label',
        //         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        //     },
        //     {
        //         imagePath: 'assets/images/slider3.jpg',
        //         label: 'Third slide label',
        //         text:
        //             'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
        //     }
        // );

        // this.alerts.push(
        //     {
        //         id: 1,
        //         type: 'success',
        //         message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        //         Voluptates est animi quibusdam praesentium quam, et perspiciatis,
        //         consectetur velit culpa molestias dignissimos
        //         voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
        //     },
        //     {
        //         id: 2,
        //         type: 'warning',
        //         message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        //         Voluptates est animi quibusdam praesentium quam, et perspiciatis,
        //         consectetur velit culpa molestias dignissimos
        //         voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
        //     }
        // );
    }

    jobSheetDetail: any;

    ngOnInit() {

        //   this.localization.getJSON().subscribe(data => {
        //     this.jobSheetDetail = data.dummyData;
        //   })

        
            this.jobSheetDetail = [
                {
                    "jbDate" : "13/12/2018",
                    "jbNo" : "1234556",
                    "imeiNo" : "19812486997",
                    "mobNo" : "12345567890",
                    "deviceName" : "xyz",
                    "custName" : "asdfsdf",
                    "jbstatus" : "close",
                    "tat" : "y",
                    "escltdTo" : "opg",
                    "crrntAssn" : "yhn"
                },
                {
                    "jbDate" : "13/12/2018",
                    "jbNo" : "1234556",
                    "imeiNo" : "19812486997",
                    "mobNo" : "12345567890",
                    "deviceName" : "xyzafz",
                    "custName" : "invd",
                    "jbstatus" : "open",
                    "tat" : "y",
                    "escltdTo" : "close",
                    "crrntAssn" : "yhn"
                },
                {
                    "jbDate" : "13/12/2018",
                    "jbNo" : "1234556",
                    "imeiNo" : "19812486997",
                    "mobNo" : "12345567890",
                    "deviceName" : "xyz",
                    "custName" : "abc",
                    "jbstatus" : "open",
                    "tat" : "y",
                    "escltdTo" : "opg",
                    "crrntAssn" : "yhn"
                }
            ]
        
        

    }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
