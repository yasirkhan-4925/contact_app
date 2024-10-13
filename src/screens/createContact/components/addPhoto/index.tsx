import {TouchableOpacity, View} from 'react-native';
import {dynamicStyles} from './style';
import {AppText, Icon} from '@app/components';
import {IconSetsEnum} from '@app/utils/types';
import {moderateScale} from '@app/utils';
import {colors} from '@app/assets/colors';

const AddPhoto = () => {
  const styles = dynamicStyles();
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} style={styles.addPhotoContainer}>
        <Icon
          iconSetName={IconSetsEnum.MaterialIcons}
          size={moderateScale(60)}
          name="add-a-photo"
          color={colors.bgSecondary}
        />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8}>
        <AppText textStyles={styles.addPhotoText}>Add Photo</AppText>
      </TouchableOpacity>
    </View>
  );
};
export default AddPhoto;
