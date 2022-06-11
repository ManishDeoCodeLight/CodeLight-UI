import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigDashboardComponent } from './config-dashboard.component';
import { CountryInfoComponent } from './country-info/country-info.component';
import { ConfigFileUpdateComponent } from './config-file-update/config-file-update.component';
import { MaterialExampleModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ConfigDashboardComponent,
    CountryInfoComponent,
    ConfigFileUpdateComponent
  ],
  imports: [
    CommonModule,
    MaterialExampleModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports:[ConfigDashboardComponent]
})
export class ExternalConfigDashboardModule { }
