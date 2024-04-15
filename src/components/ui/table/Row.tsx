import { FC, ReactNode } from 'react';

import styles from './table.module.scss';

interface Props {
  rowData: ReactNode[];
}

const Row: FC<Props> = ({ rowData }) => {
  return (
    <tr className={styles.row}>
      {rowData.map((cell, index) => (
        <td key={index}>{cell}</td>
      ))}
    </tr>
  );
};

export default Row;
