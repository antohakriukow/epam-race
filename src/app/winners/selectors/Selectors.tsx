'use client';

import { Dispatch, FC, SetStateAction } from 'react';
import Select, { SingleValue } from 'react-select';
import {
  OptionType,
  SortOrder,
  SortParam,
} from '@/shared/types/winners-page.types';

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

  const handleSortParamChange = (selectedOption: SingleValue<OptionType>) =>
    setSortParam(selectedOption?.value as SortParam);

  const handleSortOrderChange = (selectedOption: SingleValue<OptionType>) =>
    setSortOrder(selectedOption?.value as SortOrder);

  const getLabel = (option: OptionType) => option.label;
  const getValue = (option: OptionType) => option.value.toString();
  const paramsValue = sortParams.find((option) => option.value === sortParam);
  const orderValue = sortOrders.find((option) => option.value === sortOrder);

  return (
    <div className={styles.container}>
      <div>
        <p>sort by</p>
        <Select<OptionType>
          options={sortParams}
          value={paramsValue}
          onChange={handleSortParamChange}
          getOptionLabel={getLabel}
          getOptionValue={getValue}
          styles={customStyles}
        />
      </div>

      <div>
        <p>order</p>
        <Select<OptionType>
          options={sortOrders}
          value={orderValue}
          onChange={handleSortOrderChange}
          getOptionLabel={getLabel}
          getOptionValue={getValue}
          styles={customStyles}
        />
      </div>
    </div>
  );
};

export default Selectors;
