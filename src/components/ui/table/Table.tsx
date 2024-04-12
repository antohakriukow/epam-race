import { FC, PropsWithChildren } from 'react';

import styles from './table.module.scss';

const Table: FC<PropsWithChildren> = ({ children }) => {
  return <table className={styles.table}>{children}</table>;
};
export default Table;
