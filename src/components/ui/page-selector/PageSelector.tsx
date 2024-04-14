import { Dispatch, FC, SetStateAction } from 'react';
import { BsCaretLeft, BsCaretRight } from 'react-icons/bs';

import styles from './page-selector.module.scss';
import { COLOR_PRIMARY_500 } from '@/shared/styles/colors';
import { CARS_PAGE_LIMIT } from '@/shared/constants';
import { calculateLastPageNumber } from '@/shared/utils/calculateLastPageNumber';

interface Props {
  type: 'garage' | 'winners';
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  totalCount: number;
}

const PageSelector: FC<Props> = ({ type, page, totalCount, setPage }) => {
  const lastPageNumber = calculateLastPageNumber(totalCount, CARS_PAGE_LIMIT);

  const isBackButtonVisible = page !== 1;
  const isForwardButtonVisible = page !== lastPageNumber;
  const isGaragePage = type === 'garage';

  const handleGoBack = () => setPage((old) => Math.max(old - 1, 0));
  const handleGoForward = () => setPage((old: number) => old + 1);

  return (
    <div className={styles.container}>
      <p>
        {isGaragePage ? 'garage' : 'winners'} ({totalCount || 0})
      </p>
      <div className={styles.selector}>
        {isBackButtonVisible && (
          <BsCaretLeft
            color={COLOR_PRIMARY_500}
            size={20}
            onClick={handleGoBack}
          />
        )}
        <span>page #{page}</span>
        {isForwardButtonVisible && (
          <BsCaretRight
            color={COLOR_PRIMARY_500}
            size={20}
            onClick={handleGoForward}
          />
        )}
      </div>
    </div>
  );
};
export default PageSelector;
