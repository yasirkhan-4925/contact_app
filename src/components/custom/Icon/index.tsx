import {getIconsSet} from '@app/utils';
import {IconSetsEnum} from '@app/utils/types';

interface Props {
  name: string;
  size: number;
  color?: string;
  iconSetName: IconSetsEnum;
}

const Icon = ({name, iconSetName, size, color = '#ffff'}: Props) => {
  const Icon = getIconsSet(iconSetName);
  return <Icon name={name} size={size} color={color} />;
};

export default Icon;
