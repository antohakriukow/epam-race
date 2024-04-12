import { FC } from 'react';
import styles from './button.module.scss';
import { TypeMaterialIconName } from '@/shared/types/icon.types';
import MaterialIcon from '../MaterialIcon';
import cn from 'clsx';

type TypeSize = 'L' | 'M' | 'S';

interface Props {
  text?: string;
  iconName?: TypeMaterialIconName;
  color: string;
  size?: TypeSize;
  isDisabled?: boolean;
  onClick: () => void;
}

const Button: FC<Props> = ({
  text,
  iconName,
  color = '#fff',
  size = 'M',
  onClick,
  isDisabled,
}) => {
  const LARGE_ICON_SIZE = '32';
  const MEDIUM_ICON_SIZE = '24';
  const SMALL_ICON_SIZE = '18';

  const getIconSize = (): string => {
    switch (size) {
      case 'L':
        return LARGE_ICON_SIZE;
      case 'M':
        return MEDIUM_ICON_SIZE;
      case 'S':
        return SMALL_ICON_SIZE;
      default:
        return SMALL_ICON_SIZE;
    }
  };

  const iconSize = getIconSize();

  return (
    <button
      className={cn(styles.button, {
        [styles.large]: size === 'L',
        [styles.medium]: size === 'M',
        [styles.small]: size === 'S',
      })}
      style={{ borderColor: color, color }}
      onClick={onClick}
      disabled={isDisabled}
    >
      {!!text && text}
      {!!iconName && (
        <MaterialIcon
          name={iconName}
          size={iconSize}
        />
      )}
    </button>
  );
};
export default Button;
