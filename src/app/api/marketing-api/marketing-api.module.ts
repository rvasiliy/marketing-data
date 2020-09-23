import {ModuleWithProviders, NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {MARKETING_API_BASE_URL} from './tokens/marketing-api-base-url.token';
import {MarketingApiConfig} from './marketing-api-config';
import {MarketingService} from './services/marketing.service';

@NgModule({
  imports: [HttpClientModule]
})
export class MarketingApiModule {
  static config(config: MarketingApiConfig): ModuleWithProviders<MarketingApiModule> {
    return {
      ngModule: MarketingApiModule,
      providers: [
        {provide: MARKETING_API_BASE_URL, useValue: config.baseUrl},
        MarketingService
      ]
    };
  }
}
