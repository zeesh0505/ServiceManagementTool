// import { Injectable } from '@angular/core';
// import { Router, CanActivate } from '@angular/router';
// import {UtilityService} from '../../home/service/utility.service';
// @Injectable({
//   providedIn: 'root'
// })
// export class NewUserGuard implements CanActivate {

// constructor(private userprofilesvc: UtilityService, public router: Router) { }

//      canActivate(): boolean {
//         let profile = this.userprofilesvc.getUserProfile();
//         if (profile && (profile.isAdmin || profile.isManager || profile.isUser )) {
//           return true;
//         } else {
//           alert('You are not authorized to view');
//           this.router.navigate(['dashboard']);
//           return false;
//         }
//   }

// }