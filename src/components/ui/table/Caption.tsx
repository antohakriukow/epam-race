import { FC } from 'react';

import styles from './table.module.scss';

interface Props {
  title: string;
}

const Caption: FC<Props> = ({ title }) => {
  return <caption className={styles.caption}>{title}</caption>;
};
export default Caption;
