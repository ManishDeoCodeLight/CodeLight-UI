import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';
import { ConfigDashboardService } from '../config-dashboard.service';
import {region} from '../config.model';

@Component({
  selector: 'country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.scss']
})
export class CountryInfoComponent implements OnInit {

  myControl = new FormControl('India');
  // options: region[] = [{label:"India" , value:"india"}, {label:"USA" , value:"usa"} , {label:"UK" , value:"uk"}];
  options: region[] | undefined;
  filteredOptions!: Observable<region[]>;
  selectedItem:any | undefined;
 constructor(private configDashboardService: ConfigDashboardService) {}
  ngOnInit() {
    this.configDashboardService.getConfig().subscribe(config => {
      console.log("config" , config);
      this.options = config;
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || '')),
      );
    })
   

   /* this.myControl.valueChanges.subscribe(value=> {
      console.log(this.selectedItem);
    })*/
  }
  private _filter(value: string): region[] {
    const filterValue = value.toLowerCase();
    
    return this.options? this.options.filter(option => option.label.toLowerCase().includes(filterValue)): [];
  }
 
  getConfig(){
    // refresh operation
    console.log(this.selectedItem);
    this.configDashboardService.getRegionWiseConfig(this.selectedItem.value).subscribe(config => {
    this.configDashboardService.subject.next(config);
   })
  }

}
