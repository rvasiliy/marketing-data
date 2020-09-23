import {MetricColumn} from '../metric-column';
import {MetricTypeEnum} from '../enum/metric-type.enum';

export interface MoneyColumn extends MetricColumn {
  metricType: MetricTypeEnum.money;
  currency: string;
}
