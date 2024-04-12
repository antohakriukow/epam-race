import { FC, PropsWithChildren } from 'react';

import styles from './table.module.scss';

const Body: FC<PropsWithChildren> = ({ children }) => {
  return <tbody className={styles.body}>{children}</tbody>;
};
export default Body;
