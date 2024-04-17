import { FC } from 'react';
import cn from 'clsx';
import ModalPortal from '@/components/ui/modal/ModalPortal';
import { useTypedSelector } from '@/hooks';
import { Codystar } from 'next/font/google';

import styles from './winners-modal.module.scss';

const CodystarFont = Codystar({ subsets: ['latin'], weight: '400' });

const WinnersModal: FC = () => {
  const winner = useTypedSelector((state) => state.race.winner);

  if (!winner?.velocity || !winner.distance) return null;

  const winnerTime = (winner?.distance / 1000 / winner?.velocity).toPrecision(
    2,
  );

  return (
    <ModalPortal>
      <div className={styles.container}>
        <div className={styles.outerBorder}>
          <div className={cn(styles.modal, CodystarFont.className)}>
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
