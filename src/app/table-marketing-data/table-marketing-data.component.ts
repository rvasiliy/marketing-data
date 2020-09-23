import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {forkJoin, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {MarketingApiDataProviderService} from '../common/marketing-data/providers/marketing-api-data-provider.service';

interface TableData {
  [key: string]: any;
}

@Component({
  selector: 'app-table-marketing-data',
  templateUrl: './table-marketing-data.component.html',
  styleUrls: ['./table-marketing-data.component.scss']
})
export class TableMarketingDataComponent implements OnInit {
  displayedColumns$: Observable<string[]>;
  dataSource$: Observable<MatTableDataSource<TableData>>;
  configs$: Observable<{ key: string, title: string }[]>;

  constructor(private marketingService: MarketingApiDataProviderService) {
  }

  ngOnInit(): void {
    const dataProvider = this.marketingService.getDataProvider();

    this.displayedColumns$ = dataProvider.getColumns().pipe(map(columns => columns.map(column => column.key)));

    this.dataSource$ = forkJoin([
      dataProvider.getColumns(),
      dataProvider.getData()
    ]).pipe(
      map(([columns, rows]) => {
        return rows.map(values => {
          const row: TableData = {};

          columns.forEach((column, index) => {
            row[column.key] = values[index];
          });

          return row;
        });
      }),
      map(rows => new MatTableDataSource(rows))
    );

    this.configs$ = dataProvider.getColumns().pipe(map(columns => columns.map(column => {
      return {
        key: column.key,
        title: column.title
      };
    })));
  }
}
