import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {GeneralService} from '../services/general.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    constructor(private translate: TranslateService, private generalClient: GeneralService) {
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');
    }

    public regisForm: FormGroup;

    ngOnInit() {}

    
    userRegis(){
        var obj = [{
          "first_name": "Zeeshan",
          "password": "2222",
          "last_name": "haider",
          "mobile_no": "9999999999",
          "org_name": "xyz comp",
          "user_id": "bbb",
          "email": "zee@xyz.com"
        }];
    
        this.generalClient.registrationApi(obj)
      .subscribe(
       data => {
         console.log(data)
      },
      error => {
          console.log(error);
      },
      );
      }
    
    //   BuildForm() {
    
    //     const DecimalPattern: any = '^(?:[0-9]+(?:\.[0-9]{0,2})?)?$';
    
    //     this.regisForm = new FormGroup({
    //       firstName: new FormControl({value: '', disabled: true}),
    //     });
    
    //   }
}
