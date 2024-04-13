import { Dispatch, FC, SetStateAction } from 'react';
import PageSelector from '@/components/ui/page-selector/PageSelector';

import styles from './page-tools.module.scss';
import { calculateLastPageNumber } from '@/shared/utils/calculateLastPageNumber';
import { CARS_PAGE_LIMIT } from '@/shared/constants';

interface Props {
  page: number;
  totalCount: number;
  setPage: Dispatch<SetStateAction<number>>;
}

const PageTools: FC<Props> = ({ page, setPage, totalCount }) => {
  const lastPageNumber = calculateLastPageNumber(totalCount, CARS_PAGE_LIMIT);
  return (
    <div className={styles.container}>
      <p>garage ({totalCount || 0})</p>
      <PageSelector
        page={page}
        setPage={setPage}
        lastPage={lastPageNumber}
      />
    </div>
  );
};
export default PageTools;
