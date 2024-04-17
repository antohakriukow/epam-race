import { FC, ReactNode } from 'react';
import { Codystar } from 'next/font/google';

import styles from './table.module.scss';

const CodystarFont = Codystar({ subsets: ['latin'], weight: '400' });

interface Props {
  rowData: ReactNode[];
}

const Row: FC<Props> = ({ rowData }) => {
  return (
    <tr className={styles.row}>
      {rowData.map((cell, index) => (
        <td
          className={CodystarFont.className}
          key={index}
        >
          {cell}
        </td>
      ))}
    </tr>
  );
};

export default Row;
