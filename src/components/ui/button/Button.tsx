import { FC } from 'react';
import cn from 'clsx';
import MaterialIcon from '../MaterialIcon';
import { TypeMaterialIconName } from '@/shared/types/icon.types';

import styles from './button.module.scss';
import { COLOR_GRAY } from '@/shared/styles/colors';

type TypeSize = 'L' | 'M' | 'S';

interface Props {
  text?: string;
  iconName?: TypeMaterialIconName;
  color: string;
  size?: TypeSize;
  disabled?: boolean;
  onClick: () => void;
}

const Button: FC<Props> = ({
  text,
  iconName,
  color = '#fff',
  size = 'M',
  onClick,
  disabled,
}) => {
  const LARGE_ICON_SIZE = '32';
  const MEDIUM_ICON_SIZE = '20';
  const SMALL_ICON_SIZE = '16';

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
  const buttonColor = disabled ? COLOR_GRAY : color;

  return (
    <button
      className={cn(styles.button, {
        [styles.large]: size === 'L',
        [styles.medium]: size === 'M',
        [styles.small]: size === 'S',
      })}
      style={{ borderColor: buttonColor, color: buttonColor }}
      onClick={onClick}
      disabled={disabled}
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
