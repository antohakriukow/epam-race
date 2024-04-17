import { FC } from 'react';
import * as MaterialIcons from 'react-icons/md';
import { TypeMaterialIconName } from '@/shared/types/icon.types';

interface Props {
  name: TypeMaterialIconName;
  size: string;
}

const MaterialIcon: FC<Props> = ({ name, size = '24' }) => {
  const IconComponent = MaterialIcons[name];

  return <IconComponent size={size} /> || <MaterialIcons.MdDragIndicator />;
};

export default MaterialIcon;
