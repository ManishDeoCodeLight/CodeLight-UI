import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { region } from './config.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigDashboardService {
  
  constructor(private http: HttpClient) { }


  private readonly  configUrl = 'assets/region.json';
  
  

  getConfig() {
    return this.http.get<region[]>(this.configUrl);
  }

  getLogInfo() {
    return this.http.get<any[]>("assets/logInfo.json");
  }

  getRegionWiseConfig(region: string) {
    let configFetchURL;
    if (region === "india") {
      configFetchURL = 'assets/india.json';
    } else if (region === "usa") {
      configFetchURL = 'assets/usa.json';
    } else {
      configFetchURL = 'assets/uk.json'
    }
    return this.http.get<any>(configFetchURL);
  }
}
