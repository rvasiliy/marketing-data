import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';

import {MarketingService} from '../../../api/marketing-api/services/marketing.service';
import {MarketingDto} from '../../../api/marketing-api/dto/marketing.dto';

import {DataProvider} from '../data-provider';
import {Column} from '../column';

@Injectable({
  providedIn: 'root'
})
export class MarketingApiDataProviderService {
  constructor(private marketingService: MarketingService) {
  }

  getDataProvider(): MarketingApiDataProvider {
    const data$ = this.marketingService.getData()
      .pipe(shareReplay());

    return new MarketingApiDataProvider(data$);
  }
}

export class MarketingApiDataProvider implements DataProvider {
  private data$: Observable<MarketingDto>;

  constructor(data: Observable<MarketingDto>) {
    this.data$ = data;
  }

  getColumns(): Observable<Column[]> {
    return this.data$
      .pipe(
        map(response => {
          return response.meta.columns.map(column => {
            return {
              key: column.key,
              primary: column.primary,
              title: column.title,
              type: column.type
            } as Column;
          });
        })
      );
  }

  getData(): Observable<any[][]> {
    return this.data$
      .pipe(
        map(response => {
          return response.data;
        })
      );
  }

  getTotal(): Observable<{ [p: string]: any }> {
    return this.data$
      .pipe(
        map(response => {
          return response.meta.total;
        })
      );
  }
}
