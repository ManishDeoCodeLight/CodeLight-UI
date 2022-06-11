import { Component, OnInit } from '@angular/core';
import { ConfigDashboardService } from '../config-dashboard.service';

@Component({
  selector: 'config-file-update',
  templateUrl: './config-file-update.component.html',
  styleUrls: ['./config-file-update.component.scss']
})
export class ConfigFileUpdateComponent implements OnInit {
  regionConfig: any
  backupRegionConfig: any 
  regionMap = new Map();
  constructor(private configDashboardService: ConfigDashboardService) { }
  
  ngOnInit(): void {
    this.configDashboardService.getRegionWiseConfig("india").subscribe(config => {
       this.regionConfig = config;
       this.backupRegionConfig = config;
       this.populateRegionMap();
    })
  }

  private populateRegionMap(){    
    Object.keys(this.regionConfig).forEach((key) => {
      this.regionMap.set(key, this.regionConfig[key]);
    });
  }

  getReset() {
    this.regionConfig = this.backupRegionConfig;
  }

  getChangesValue(event: any , label:any) {
    console.log(event.target.value , label);
    this.regionConfig[label]=event.target.value;
 
  }

}
