import {TouchableOpacity, View} from 'react-native';
import dynamicStyles from '../style';
import {AppText, Avatar, Icon, IconButton} from '@app/components';
import {moderateScale} from '@app/utils';
import {ETextType} from '@app/components/types';
import {IconSetsEnum} from '@app/utils/types';
import {colors} from '@app/assets/colors';

const ContactProfile = () => {
  const styles = dynamicStyles();
  return (
    <>
      <View style={styles.container}>
        {/* top profile details  */}
        <View style={styles.avatarContainer}>
          <Avatar
            username="Muhammad Yasir"
            size={moderateScale(150)}
            customTextStyles={styles.avatarTextStyles}
          />
        </View>
        <View style={styles.userNameContainer}>
          <AppText numberOfLines={2} centered type={ETextType.H3}>
            Muhammad Yasir
          </AppText>
        </View>
        {/* profile action buttons */}
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <IconButton
              rounded
              onPress={() => {}}
              iconSize={moderateScale(25)}
              iconName="call"
              iconSetName={IconSetsEnum.MaterialIcons}
            />
            <AppText>Call</AppText>
          </View>
          <View style={styles.buttonContainer}>
            <IconButton
              rounded
              onPress={() => {}}
              iconSize={moderateScale(25)}
              iconName="textsms"
              iconSetName={IconSetsEnum.MaterialIcons}
            />
            <AppText>Text</AppText>
          </View>
          <View style={styles.buttonContainer}>
            <IconButton
              rounded
              onPress={() => {}}
              iconSize={moderateScale(25)}
              iconName="videocam"
              iconSetName={IconSetsEnum.MaterialIcons}
            />
            <AppText>Video</AppText>
          </View>
        </View>

        {/* contact info */}

        <View style={styles.contactInfoContainer}>
          <AppText type={ETextType.H7}>Contact Info</AppText>

          <View style={styles.contactInfoItem}>
            <View style={styles.contactInfoIconContainer}>
              <Icon
                iconSetName={IconSetsEnum.MaterialIcons}
                name="phone"
                size={moderateScale(30)}
              />
            </View>
            <View>
              <AppText numberOfLines={1}>03091219881</AppText>
            </View>
          </View>
          {/* email - items */}

          <View style={styles.contactInfoItem}>
            <View style={styles.contactInfoIconContainer}>
              <Icon
                iconSetName={IconSetsEnum.MaterialIcons}
                name="email"
                size={moderateScale(30)}
              />
            </View>
            <View>
              <AppText numberOfLines={1}>03091219881</AppText>
            </View>
          </View>
        </View>
      </View>
      {/* divider */}
      <View style={styles.divider} />
      {/* contacts settings */}
      <AppText type={ETextType.H7}>Contact Settings</AppText>
      <View style={styles.settingsContainer}>
        <TouchableOpacity activeOpacity={0.8} style={styles.settingsItem}>
          <View style={styles.settingsIconContainer}>
            <Icon
              color={colors.red}
              iconSetName={IconSetsEnum.MaterialIcons}
              name="delete"
              size={moderateScale(30)}
            />
          </View>

          <AppText textStyles={styles.settingsText} type={ETextType.H7}>
            Delete Contact
          </AppText>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ContactProfile;
