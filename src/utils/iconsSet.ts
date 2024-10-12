import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import {IconSetsEnum} from './types';

const iconSets = {
  MaterialIcons,
  MaterialCommunityIcons,
  EntypoIcons,
};

export default function getIconsSet(iconSetName: IconSetsEnum) {
  return iconSets[iconSetName as keyof typeof iconSets] || MaterialIcons;
}
