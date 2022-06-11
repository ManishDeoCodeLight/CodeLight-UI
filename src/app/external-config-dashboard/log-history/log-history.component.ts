import { Component, OnInit } from '@angular/core';
import { ConfigDashboardService } from './../config-dashboard.service'
import { columnInfo } from  './../column-info.component';
import { Subscription } from 'rxjs';

export interface ColumnInfo {
  continent: string;
  country: number;
  president: number;
  primeMinister: string;
  largestCity: string;
  literacyRate: number;
  population: number;
  festival: string;
}

const ELEMENT_DATA: ColumnInfo[] = [
  
];

@Component({
  selector: 'log-history',
  templateUrl: './log-history.component.html',
  styleUrls: ['./log-history.component.scss']
})
export class LogHistoryComponent implements OnInit {
  constructor(private configDashboardService: ConfigDashboardService ) { }

  ngOnInit(): void {
    this.getLogHistory();
  }

  displayedColumns: string[] = ['continent', 'country', 'president', 'primeMinister', 'largestCity', 'literacyRate', 'population', 'festival'];
  dataSource = ELEMENT_DATA;

  private getLogHistory() {
    this.configDashboardService.getLogInfo().subscribe(data => {this.dataSource = data;});
  }

}
