export enum SortParam {
  ID = 'id',
  WINS = 'wins',
  TIME = 'time',
}

export enum SortOrder {
  ASC = 'ASC',
  DESC = 'DESC',
}

export interface OptionType {
  value: SortParam | SortOrder;
  label: string;
}
