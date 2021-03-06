import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { TranslateService } from '@ngx-translate/core';
import {GeneralService} from '../services/general.service';
import { Router } from '@angular/router'
import { UserRegistration,userReg } from '../shared/models/sharedModel'

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    
    public message : string;
    constructor(private translate: TranslateService,public router: Router, private generalClient: GeneralService) {
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');
    }

    regisModel = [];
    regisData = new userReg();

    ngOnInit() {
    }

    
    userRegis(obj){
        var obj1 = [{
          "first_name": "Zeeshan",
          "password": "2222",
          "last_name": "haider",
          "mobile_no": "9999999999",
          "org_name": "xyz comp",
          "user_id": "bbb",
          "email": "zee@xyz.com",
          "data": "register",
        }];
    
        this.generalClient.registrationApi(obj)
      .subscribe(
        resRegisData => {
         console.log(resRegisData);
         if(resRegisData.success){
          this.router.navigate(['/dashboard']);
          }else{
              this.message = resRegisData.message;
          }
      },
      error => {
          console.log(error);
      },
      );
      }
    
    //   BuildForm() {
    
    //     const DecimalPattern: any = '^(?:[0-9]+(?:\.[0-9]{0,2})?)?$';
    //     this.regisForm = new FormGroup({
    //         firstName: new FormControl('', [Validators.required,Validators.minLength(4),])
    //       });
    //   }

      onSubmit(){
        this.regisData.data="register";
        this.regisModel = [];
        this.regisModel.push(this.regisData);
        this.userRegis(this.regisModel);
        // this.router.navigate(['/dashboard']);
        console.log(this.regisModel);
      }
}
