import { FC } from 'react';
import { MODAL_PLACEHOLDER_ID } from '@/shared/constants';

import styles from './placeholder.module.scss';

const ModalPlaceHolder: FC = () => {
  return (
    <div
      className={styles.container}
      style={{ zIndex: 30 }}
      id={MODAL_PLACEHOLDER_ID}
    />
  );
};
export default ModalPlaceHolder;
