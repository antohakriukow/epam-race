import { StylesConfig } from 'react-select';
import {
  SortOrder,
  SortParam,
  OptionType,
} from '@/shared/types/winners-page.types';

export const useSelectors = () => {
  const customStyles: StylesConfig<OptionType, boolean> = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#c9cee8' : provided.backgroundColor,
      fontSize: '16px',
      color: '#171c36',
    }),
    container: (provided) => ({
      ...provided,
      width: 140,
    }),
    valueContainer: (provided) => ({
      ...provided,
      fontSize: '16px',
      lineHeight: 1,
      paddingTop: 0,
      paddingBottom: 0,
    }),
  };
  const sortParams: OptionType[] = [
    { value: SortParam.TIME, label: 'race time' },
    { value: SortParam.WINS, label: 'wins count' },
  ];

  const sortOrders: OptionType[] = [
    { value: SortOrder.ASC, label: 'ascending' },
    { value: SortOrder.DESC, label: 'descending' },
  ];

  return { customStyles, sortParams, sortOrders };
};
