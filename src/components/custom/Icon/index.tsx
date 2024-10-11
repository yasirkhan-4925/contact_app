import RN_ICON from 'react-native-vector-icons/AntDesign';

interface Props {
  name: string;
  size: number;
  color?: string;
}

const Icon = ({name, size, color = '#ffff'}: Props) => {
  return <RN_ICON name={name} size={size} color={color} />;
};

export default Icon;
