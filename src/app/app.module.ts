import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExternalConfigDashboardModule } from './external-config-dashboard/external-config-dashboard.module';


@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExternalConfigDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
