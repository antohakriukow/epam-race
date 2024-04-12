import { FC } from 'react';

import styles from './table.module.scss';

interface Props {
  headerTitles: string[];
}
const Header: FC<Props> = ({ headerTitles }) => {
  return (
    <thead className={styles.header}>
      <tr>
        {headerTitles.map((title, index) => (
          <th key={index}>{title}</th>
        ))}
      </tr>
    </thead>
  );
};
export default Header;
