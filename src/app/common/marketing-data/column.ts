import {ColumnTypeEnum} from './enum/column-type.enum';

export interface Column {
  type: ColumnTypeEnum;
  key: string;
  title: string;
  primary?: boolean;
}
