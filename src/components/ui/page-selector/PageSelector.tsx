import { FC } from 'react';
import { BsCaretLeft, BsCaretRight } from 'react-icons/bs';
import { GARAGE_PAGE_LIMIT, WINNERS_PAGE_LIMIT } from '@/shared/constants';
import { calculateLastPageNumber } from '@/shared/utils/calculateLastPageNumber';
import { COLOR_PRIMARY_500 } from '@/shared/styles/colors';

import styles from './page-selector.module.scss';

interface Props {
  type: 'garage' | 'winners';
  page: number;
  setPage: (page: number) => void;
  totalCount: number;
}

const PageSelector: FC<Props> = ({ type, page, totalCount, setPage }) => {
  const pageLimit = type === 'garage' ? GARAGE_PAGE_LIMIT : WINNERS_PAGE_LIMIT;
  const lastPageNumber = calculateLastPageNumber(totalCount, pageLimit);

  const isGaragePage = type === 'garage';
  const isBackButtonVisible = page !== 1;
  const isForwardButtonVisible = page < lastPageNumber;

  const handleGoBack = () => setPage(Math.max(page - 1, 0));
  const handleGoForward = () => setPage(page + 1);

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
