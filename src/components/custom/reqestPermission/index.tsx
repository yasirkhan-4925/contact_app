import {View} from 'react-native';
import AppText from '../appText';
import CustomView from '../customView';
import dynamicStyles from './style';
import Button from '../button';
import {ButtonSizeEnum, ETextType} from '@app/components/types';
import {openSettings} from '@app/utils/contactPermission';

interface Props {
  promptText: string;
}

const RequestPermission = ({promptText}: Props) => {
  const styles = dynamicStyles();
  return (
    <CustomView containerStyle={styles.container}>
      <View style={styles.promptTextContainer}>
        <AppText type={ETextType.H6} textStyles={styles.promptText}>
          {promptText}
        </AppText>
      </View>
      <View>
        <Button
          buttonText="Give Permission"
          buttonSize={ButtonSizeEnum.LARGE}
          onPress={() => openSettings()}
          containerStyle={styles.buttonContainer}
        />
      </View>
    </CustomView>
  );
};

export default RequestPermission;
