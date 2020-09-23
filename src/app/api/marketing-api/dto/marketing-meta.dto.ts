import {MarketingColumnDto} from './marketing-column.dto';

export interface MarketingMetaDto {
  total: {[key: string]: any};
  columns: MarketingColumnDto[];
}
