import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  modifiedFields: any;
  constructor(private configDashboardService: ConfigDashboardService) { }
  
  ngOnInit(): void {
    this.configDashboardService.getRegionWiseConfig("india").subscribe(config => {
       this.regionConfig = config;
       this.backupRegionConfig = config;
       this.populateRegionMap();
    })

    this.configDashboardService.subject.subscribe(config => {
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

  /*getReset(form: NgForm) {
    this.regionConfig = this.backupRegionConfig;
    form.reset(this.regionConfig);
  }*/

  getChangesValue(event: any , label:any) {
    console.log(event.target.value , label);
    if (this.backupRegionConfig[label]  !== event.target.value) {
      if (!this.modifiedFields) {
        this.modifiedFields = {};
      }
      this.modifiedFields[label] = event.target.value;
    } else {
      if (this.modifiedFields && event.target.value !== this.modifiedFields[label]) {
          delete this.modifiedFields[label];
      }
    }
  }

  saveConfig() {
    console.log(this.modifiedFields);
  }

}
