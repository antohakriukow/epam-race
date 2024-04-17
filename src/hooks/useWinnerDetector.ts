import { useEffect, useState } from 'react';
import { ICar } from '../shared/types/car.types';
import { useActions } from './useActions';
import { useTypedSelector } from './useTypedSelector';
import { useCreateWinner } from './useCreateWinner';

export const useWinnerDetector = (cars: ICar[]) => {
  const { setWinner } = useActions();
  const winner = useTypedSelector((state) => state.race.winner);
  const [isWinnerDetectorOn, setIsWinnerDetectorOn] = useState(false);
  const createWinner = useCreateWinner();

  const handleWinner = (id: string) => {
    const carData = cars.find((car) => car.id.toString() === id.toString());
    if (carData) setWinner({ ...carData });
  };

  useEffect(() => {
    if (winner) {
      console.log('useWinnerDetector winner: ', winner);
      createWinner(winner);
      const timer = setTimeout(() => {
        setWinner(null);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [winner, setWinner, createWinner]);

  useEffect(() => {
    const targetNode = document.getElementById('tracks');
    if (!targetNode) return;

    const observer = new MutationObserver((mutations) => {
      for (let mutation of mutations) {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'class'
        ) {
          const target = mutation.target as HTMLElement;
          if (target.classList.contains('isWinner')) {
            handleWinner(target.id.replace('car-', ''));
            observer.disconnect();
            break;
          }
        }
      }
    });

    const config = {
      attributes: true,
      subtree: true,
      attributeFilter: ['class'],
    };
    observer.observe(targetNode, config);

    return () => observer.disconnect();
  }, [isWinnerDetectorOn]); // ATTENTION: only isWinnerDetectorOn in dependencies array needed

  return { setIsWinnerDetectorOn, winner };
};
