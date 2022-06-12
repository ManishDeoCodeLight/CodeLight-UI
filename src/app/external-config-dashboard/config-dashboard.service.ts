import { HttpClient, HttpHeaders } from '@angular/common/http';
import { R3TargetBinder } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { region } from './config.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigDashboardService {
  
  subject:Subject<any> = new Subject();
  private country: any;

  constructor(private http: HttpClient) { }


  private readonly  configUrl = 'assets/region.json';
  
  

  getConfig() {
    return this.http.get<region[]>(this.configUrl);
  }

  

  getLogInfo() {
    return this.http.get<any[]>("http://localhost:8080/properties/audit");
  }

  

  getRegionWiseConfig(region: string) {
    debugger
    let configFetchURL;
    const headers = { 'content-type': 'application/json'}  
    if (region === "india") {
      this.http.post('http://localhost:9000/india/actuator/refresh',null);
      configFetchURL = 'http://localhost:9000/india/country-info';
    } else if (region === "usa") {
      this.http.post('http://localhost:9002/usa/actuator/refresh',null);
      configFetchURL = 'http://localhost:9002/usa/country-info';
    } else {
      this.http.post('http://localhost:9001/japan/actuator/refresh',null);
      configFetchURL = 'http://localhost:9001/japan/country-info'
    }
    return this.http.get<any>(configFetchURL);
  }

  getCountry() {
    return this.country;
  }

  

  saveConfig(modifiedFields: any) {
   // const headers = { 'content-type': 'application/json' , 'Access-Control-Allow-Origin': '*'} ;
   const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    withCredentials: true,
  };
    this.http.post('localhost:8080/properties/updateForm', modifiedFields,httpOptions).subscribe(() => {console.log('updated changes')}, () => {console.log('error inside')});
}
}
