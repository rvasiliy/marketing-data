import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MarketingApiModule} from './api/marketing-api/marketing-api.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MarketingApiModule.config({baseUrl: 'http://localhost:4200'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
