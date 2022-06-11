import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';
import {region} from '../config.model';

@Component({
  selector: 'country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.scss']
})
export class CountryInfoComponent implements OnInit {

  myControl = new FormControl('');
  options: region[] = [{label:"India" , value:"india"}, {label:"USA" , value:"usa"} , {label:"UK" , value:"uk"}];
  filteredOptions!: Observable<region[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }
  private _filter(value: string): region[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.label.toLowerCase().includes(filterValue));
  }

  getSelectedRegionDetail(countryName: string) {
    alert(countryName);
  }

}
