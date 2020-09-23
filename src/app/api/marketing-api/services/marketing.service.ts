import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {MARKETING_API_BASE_URL} from '../tokens/marketing-api-base-url.token';

@Injectable()
export class MarketingService {
  constructor(protected readonly http: HttpClient, @Inject(MARKETING_API_BASE_URL) protected readonly baseUrl: string) {
  }

  getData(): Observable<any> {
    const url = `${this.baseUrl}/assets/data.json`;

    return this.http.get(url);
  }
}
