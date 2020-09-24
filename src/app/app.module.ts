import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';

import {AppComponent} from './app.component';
import {MarketingApiModule} from './api/marketing-api/marketing-api.module';
import {TableMarketingDataComponent} from './table-marketing-data/table-marketing-data.component';

@NgModule({
  declarations: [
    AppComponent,
    TableMarketingDataComponent
  ],
  imports: [
    BrowserModule,
    MarketingApiModule.config({baseUrl: 'http://localhost:4200'}),
    BrowserAnimationsModule,
    MatSortModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
