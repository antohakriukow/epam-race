import { Dispatch, FC, SetStateAction } from 'react';
import { BsCaretLeft, BsCaretRight } from 'react-icons/bs';

import styles from './page-selector.module.scss';
import { COLOR_PRIMARY_500 } from '@/shared/styles/colors';

interface Props {
  page: number;
  lastPage: number;
  setPage: Dispatch<SetStateAction<number>>;
}

const PageSelector: FC<Props> = ({ page, lastPage, setPage }) => {
  const isBackButtonVisible = page !== 1;
  const isForwardButtonVisible = page !== lastPage;

  const handleGoBack = () => setPage((old) => Math.max(old - 1, 0));
  const handleGoForward = () => setPage((old: number) => old + 1);

  return (
    <div className={styles.container}>
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
  );
};
export default PageSelector;
