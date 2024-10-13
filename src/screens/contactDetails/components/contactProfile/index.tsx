import {TouchableOpacity, View} from 'react-native';
import dynamicStyles from '../style';
import {AppText, Avatar, Icon, IconButton} from '@app/components';
import {moderateScale} from '@app/utils';
import {ETextType} from '@app/components/types';
import {IconSetsEnum} from '@app/utils/types';
import {colors} from '@app/assets/colors';
import {Contact} from 'react-native-contacts/type';

interface Props {
  contact: Contact;
  onDeleteContactPress: (contact: Contact) => void;
}
const ContactProfile = ({contact, onDeleteContactPress}: Props) => {
  const styles = dynamicStyles();
  return (
    <>
      <View style={styles.container}>
        {/* top profile details  */}
        <View style={styles.avatarContainer}>
          <Avatar
            username={contact.givenName || contact.familyName || ''}
            size={moderateScale(150)}
            customTextStyles={styles.avatarTextStyles}
          />
        </View>
        <View style={styles.userNameContainer}>
          <AppText numberOfLines={2} centered type={ETextType.H3}>
            {contact.displayName}
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

        {contact.phoneNumbers.length || contact.emailAddresses.length ? (
          <View style={styles.contactInfoContainer}>
            <AppText type={ETextType.H7}>Contact Info</AppText>
            {contact.phoneNumbers.length ? (
              <>
                {contact.phoneNumbers.map((item, index) => (
                  <View key={index.toString()} style={styles.contactInfoItem}>
                    <View style={styles.contactInfoIconContainer}>
                      {index === 0 ? (
                        <Icon
                          iconSetName={IconSetsEnum.MaterialIcons}
                          name="phone"
                          size={moderateScale(30)}
                        />
                      ) : null}
                    </View>
                    <View>
                      <AppText numberOfLines={1}>{item.number}</AppText>
                    </View>
                  </View>
                ))}
              </>
            ) : null}

            {/* email - items */}
            {contact.emailAddresses.length ? (
              <>
                {contact.emailAddresses.map((item, index) => (
                  <View key={index.toString()} style={styles.contactInfoItem}>
                    <View style={styles.contactInfoIconContainer}>
                      {index == 0 ? (
                        <Icon
                          iconSetName={IconSetsEnum.MaterialIcons}
                          name="email"
                          size={moderateScale(30)}
                        />
                      ) : null}
                    </View>
                    <View>
                      <AppText numberOfLines={1}>{item.email}</AppText>
                    </View>
                  </View>
                ))}
              </>
            ) : null}
          </View>
        ) : null}
      </View>
      {/* divider */}
      <View style={styles.divider} />
      {/* contacts settings */}
      <AppText type={ETextType.H7}>Contact Settings</AppText>
      <View style={styles.settingsContainer}>
        <TouchableOpacity
          onPress={() => {
            onDeleteContactPress(contact);
          }}
          activeOpacity={0.8}
          style={styles.settingsItem}>
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
