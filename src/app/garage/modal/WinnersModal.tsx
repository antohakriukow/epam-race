import { FC } from 'react';
import ModalPortal from '@/components/ui/modal/ModalPortal';
import { useTypedSelector } from '@/hooks';

import styles from './winners-modal.module.scss';

const WinnersModal: FC = () => {
  const { winner } = useTypedSelector((state) => state.engines);

  if (!winner?.velocity || !winner.distance) return null;

  const winnerTime = (winner?.distance / 1000 / winner?.velocity).toPrecision(
    2,
  );

  return (
    <ModalPortal>
      <div className={styles.container}>
        <div className={styles.outerBorder}>
          <div className={styles.modal}>
            <h3>winner</h3>
            <p>{winner?.name}</p>
            <p>time: {winnerTime} s</p>
          </div>
        </div>
      </div>
    </ModalPortal>
  );
};
export default WinnersModal;