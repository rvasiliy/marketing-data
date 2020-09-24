import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {forkJoin, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {
  MarketingApiDataProvider,
  MarketingApiDataProviderService
} from '../common/marketing-data/providers/marketing-api-data-provider.service';

interface TableData {
  [key: string]: any;
}

@Component({
  selector: 'app-table-marketing-data',
  templateUrl: './table-marketing-data.component.html',
  styleUrls: ['./table-marketing-data.component.scss']
})
export class TableMarketingDataComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns$: Observable<string[]>;
  dataSource$: Observable<MatTableDataSource<TableData>>;
  configs$: Observable<{ key: string, title: string }[]>;

  private dataProvider$: MarketingApiDataProvider;

  constructor(private marketingService: MarketingApiDataProviderService) {
    this.dataProvider$ = this.marketingService.getDataProvider();
  }

  ngOnInit(): void {
    this.displayedColumns$ = this.dataProvider$.getColumns().pipe(map(columns => columns.map(column => column.key)));

    this.dataSource$ = forkJoin([
      this.dataProvider$.getColumns(),
      this.dataProvider$.getData()
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

    this.configs$ = this.dataProvider$.getColumns()
      .pipe(
        map(columns => columns.map(column => {
            return {
              key: column.key,
              title: column.title
            };
          })
        )
      );
  }

  ngAfterViewInit(): void {
    this.dataSource$ = this.dataSource$.pipe(map(datasource => {
      datasource.sort = this.sort;

      return datasource;
    }));
  }

  getTotalByColumn(key: string): Observable<any> {
    return this.dataProvider$.getTotal().pipe(map(total => total[key]));
  }

  trackBy(index): number {
    return index;
  }
}
