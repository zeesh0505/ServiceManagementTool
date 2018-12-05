import { Injectable } from '@angular/core';
import { HttpClient,HttpParams ,HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private httpClient: HttpClient) { 

  }

  // serviceUrl: string = environment.api_url;
  // constructor(private httpClient: HttpClient) { }
  // public GetAssocList(): Observable<IAssociate[]>{
  //   let url = this.serviceUrl + 'General/associate';
  //   return this.httpClient.get<IAssociate[]>(url);
  // }

  // public getAllCountries(): Observable<ICountryMaster[]>{
  //   let url = this.serviceUrl + 'master/visacountry';
  //   return this.httpClient.get<ICountryMaster[]>(url);
  // }

  // public getAllVdis() : Observable<IVdi[]>{
  //   let headers = new HttpHeaders();
  //   headers = headers.set('Cache-Control', 'no-cache').
  //   set('Pragma','no-cache').
  //   set('Expires','Sat, 01 Jan 2000 00:00:00 GMT');
  //   var options =  {headers: headers};
  //   let url = this.serviceUrl + 'General/vdidetails';
  //   return this.httpClient.get<IVdi[]>(url, options);   
  // }
  // public GetAssocDasboardList() : Observable<IAssociate[]>{
  //   let headers = new HttpHeaders();
  //   headers = headers.set('Cache-Control', 'no-cache').
  //   set('Pragma','no-cache').
  //   set('Expires','Sat, 01 Jan 2000 00:00:00 GMT');
  //   var options =  {headers: headers};
  //   let url = this.serviceUrl + 'general/associatelist';
  //   return this.httpClient.get<IAssociate[]>(url, options);   
  // }
  // public saveAssocDashboardList(associates:any):Observable<any>{
   
  //   let url = this.serviceUrl + 'general/updateassocdomainmap';
  //   return this.httpClient.post<any>(url, associates);
  // }
  // public deleteAssociateMapping(mappingId : number) : any{
  //   let url = this.serviceUrl + 'General/deleteassocdommap';   
  //   let headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });   
  //   let params = new HttpParams();
  //   params = params.append('adfID', mappingId.toString());    
  //   return this.httpClient.delete<any>(url,{ headers: headers, params: params });
  // }

  // public GetAllFeature(): Observable<any[]>{
  //   let url1 = this.serviceUrl + 'master/feature';
  //   let url2 = this.serviceUrl + 'master/domain';
  //   let url3 = this.serviceUrl + 'master/project';
  //   return Observable.forkJoin([
  //     this.httpClient.get<FeatureDataModel[]>(url1),
  //     this.httpClient.get<any[]>(url2),
  //     this.httpClient.get<any[]>(url3)
  //   ]);

  public registrationApi(regisData : any):Observable<any>{

    // let headers = new HttpHeaders();
    // let body = new HttpParams();
    // body = body.set('user', 'zeeshan');
    // body = body.set('name', 'zeeshan');
    // body = body.set('password', 'passwrd');


    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });   
    let params = new HttpParams();
    params = params.append('user', 'zeeshan'); 
    params = params.append('name', 'zeeshan'); 
    params = params.append('password', 'passwrd'); 

    // const body = 'user=zeeshan&name=zeeshan&password=passwrd';
    // headers = new HttpHeaders({ 'Content-Type': '' });   
    // var options =  {headers: headers};
    let url = 'http://zizinternational.in/service/trial/backendstuff.php';
    // return this.httpClient.post<any>(url,body,options );
    return this.httpClient.post<any>(url,regisData,{ headers: headers });
  }

  public loginApi(obj):Observable<any>{

    // let headers = new HttpHeaders();
    let body = new HttpParams();
    body = body.set('user', 'zeeshan');
    body = body.set('password', 'ssss');

    // var FormData = require('form-data');
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });   
    // let form: FormData = new FormData(); 
    // form.append('user', 'zeeshan'); 
    // form.append('name', 'zeeshan'); 
    // form.append('password', 'passwrd'); 
  //   for (var pair of form.toString()) {
  //     console.log(pair[0]+ ', ' + pair[1]); 
  // }
    // const body = 'user=zeeshan&name=zeeshan&password=passwrd';
    // headers = new HttpHeaders({ 'Content-Type': '' });   
    var options =  {headers: headers};
    let url = 'http://zizinternational.in/service/trial/backendstuff.php';
    return this.httpClient.post<any>(url,body,options );
    // return this.httpClient.post<any>(url,obj,{ headers: headers });
  }

   }
