import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MarketingApiModule} from './api/marketing-api/marketing-api.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableMarketingDataComponent } from './table-marketing-data/table-marketing-data.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    TableMarketingDataComponent
  ],
  imports: [
    BrowserModule,
    MarketingApiModule.config({baseUrl: 'http://localhost:4200'}),
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
