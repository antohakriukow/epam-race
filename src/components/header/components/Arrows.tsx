import { FC, useState, useEffect, useRef } from 'react';
import { Arrow } from '@/components/ui';

import styles from '../header.module.scss';

interface Props {
  color: string;
  count: number;
}

const ArrowSet: FC<Props> = ({ color, count }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dynamicCount, setDynamicCount] = useState(count);

  useEffect(() => {
    const updateCount = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const newCount = Math.floor(containerWidth / 28);
        setDynamicCount(Math.min(newCount, count));
      }
    };

    updateCount();

    const resizeObserver = new ResizeObserver(updateCount);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, [count]);

  return (
    <div
      ref={containerRef}
      className={styles.arrows}
    >
      {Array.from({ length: dynamicCount }).map((_, index) => (
        <Arrow
          key={index}
          color={color}
        />
      ))}
    </div>
  );
};

export default ArrowSet;
