import {Column} from './column';
import {ColumnTypeEnum} from './enum/column-type.enum';
import {MetricTypeEnum} from './enum/metric-type.enum';

export interface MetricColumn extends Column {
  type: ColumnTypeEnum.metric;
  metricType: MetricTypeEnum;
}
