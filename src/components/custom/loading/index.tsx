import {View} from 'react-native';
import dynamicStyles from './styles';
import {ActivityIndicator} from 'react-native-paper';
import {ActivityIndicatorSizeType} from '@app/components/types';

interface Props {
  size: ActivityIndicatorSizeType;
  color: string;
}
const Loading = ({size, color}: Props) => {
  const styles = dynamicStyles();
  return (
    <>
      <View style={styles.container}>
        <ActivityIndicator size={size} color={color} />
      </View>
    </>
  );
};

export default Loading;
