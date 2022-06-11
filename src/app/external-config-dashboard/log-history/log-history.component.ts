import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfigDashboardService } from './../config-dashboard.service'
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'log-history',
  templateUrl: './log-history.component.html',
  styleUrls: ['./log-history.component.scss']
})
export class LogHistoryComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource<any>();
  constructor(private configDashboardService: ConfigDashboardService ) { }

  ngOnInit(): void {
    this.getLogHistory();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = ["propertyLevel", "label", "propName", "oldValue", "newValue", "updatedBy", "updatedOn"];
  

  public doFilter = (event: Event) => {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

  private getLogHistory() {
    this.configDashboardService.getLogInfo().subscribe(data => {this.dataSource.data = data;});
  }

}
