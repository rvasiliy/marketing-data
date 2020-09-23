import {Observable} from 'rxjs';

import {Column} from './column';

export interface DataProvider {
  getColumns(): Column[] | Observable<Column[]>;

  getData(): any[][] | Observable<any[][]>;

  getTotal(): { [key: string]: any } | Observable<{ [key: string]: any }>;
}
