import {Column} from './column';
import {ColumnTypeEnum} from './enum/column-type.enum';

export interface EntityColumn extends Column {
  type: ColumnTypeEnum.entity;
}
