import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { routerTransition } from '../router.animations';
import { UserLogin, userLog} from '../shared/models/sharedModel'
import {GeneralService} from '../services/general.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    public sliders: Array<any> = [];
    public message : string;
    constructor(
        private translate: TranslateService,
        public router: Router,
        private generalClient: GeneralService
        ) {
            this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
            this.translate.setDefaultLang('en');
            const browserLang = this.translate.getBrowserLang();
            this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');

            this.sliders.push(
                {
                    imagePath: 'https://static.pexels.com/photos/33972/pexels-photo.jpg',
                    label: 'First slide label',
                    text:
                        'Nulla vitae elit libero, a pharetra augue mollis interdum.'
                },
                {
                    imagePath: 'https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg',
                    label: 'Second slide label',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                },
                {
                    imagePath: 'https://images.pexels.com/photos/872957/pexels-photo-872957.jpeg',
                    label: 'Third slide label',
                    text:
                        'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
                }
            );
    }

    loginModel = [];
    loginData = new userLog();
    

    ngOnInit() {
    }

    onSubmit() {
        this.loginData.data="login";
        this.loginModel = [];
        this.loginModel.push(this.loginData);
        this.userLogin(this.loginModel);
    }

    userLogin(obj){
        // var obj1 = [{
        //   "user_id": "qwe",
        //   "password": "qwe",
        //   "data": "login"
        // }];
        
        this.generalClient.loginApi(obj)
      .subscribe(
        resLoginData => {
         console.log(resLoginData);
         if(resLoginData.success){
            localStorage.setItem('isLoggedin', 'true');
         this.router.navigate(['/dashboard']);
         }else{
             this.message = resLoginData.message;
         }
         
      },
      error => {
          console.log(error);
      },
      );
      }
}
