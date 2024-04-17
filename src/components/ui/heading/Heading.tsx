import { FC } from 'react';

import styles from './heading.module.scss';

interface Props {
  title: string;
}

const Heading: FC<Props> = ({ title }) => {
  return <h1 className={styles.heading}>{title}</h1>;
};
export default Heading;
