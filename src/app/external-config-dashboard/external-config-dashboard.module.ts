import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigDashboardComponent } from './config-dashboard.component';
import { CountryInfoComponent } from './country-info/country-info.component';
import { ConfigFileUpdateComponent } from './config-file-update/config-file-update.component';



@NgModule({
  declarations: [
    ConfigDashboardComponent,
    CountryInfoComponent,
    ConfigFileUpdateComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ConfigDashboardComponent]
})
export class ExternalConfigDashboardModule { }
