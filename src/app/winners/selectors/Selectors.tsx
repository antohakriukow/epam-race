'use client';

import { Dispatch, FC, SetStateAction } from 'react';
import Select, { SingleValue } from 'react-select';
import { OptionType, SortOrder, SortParam } from '../types';

import styles from './selectors.module.scss';
import { useSelectors } from './useSelectors';

interface Props {
  sortParam: SortParam;
  setSortParam: Dispatch<SetStateAction<SortParam>>;
  sortOrder: SortOrder;
  setSortOrder: Dispatch<SetStateAction<SortOrder>>;
}

const Selectors: FC<Props> = ({
  sortParam,
  setSortParam,
  sortOrder,
  setSortOrder,
}) => {
  const { customStyles, sortParams, sortOrders } = useSelectors();

  const handleSortParamChange = (selectedOption: SingleValue<OptionType>) => {
    if (selectedOption) setSortParam(selectedOption.value as SortParam);
  };

  const handleSortOrderChange = (selectedOption: SingleValue<OptionType>) => {
    if (selectedOption) setSortOrder(selectedOption.value as SortOrder);
  };

  return (
    <div className={styles.container}>
      <div>
        <p>sort by</p>
        <Select<OptionType>
          options={sortParams}
          value={sortParams.find((option) => option.value === sortParam)}
          onChange={handleSortParamChange}
          getOptionLabel={(option) => option.label}
          getOptionValue={(option) => option.value.toString()}
          styles={customStyles}
        />
      </div>

      <div>
        <p>order</p>
        <Select<OptionType>
          options={sortOrders}
          value={sortOrders.find((option) => option.value === sortOrder)}
          onChange={handleSortOrderChange}
          getOptionLabel={(option) => option.label}
          getOptionValue={(option) => option.value.toString()}
          styles={customStyles}
        />
      </div>
    </div>
  );
};

export default Selectors;
