import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import dynamicStyles from './styles';
import {AppText, Avatar, Icon} from '@app/components';
import {IconSetsEnum} from '@app/utils/types';
import {moderateScale} from '@app/utils';
import {ETextType} from '@app/components/types';
import {colors} from '@app/assets/colors';
import {useNavigation} from '@react-navigation/native';
import {Screen} from '@app/navigation/constant';

const SearchBar = () => {
  const styles = dynamicStyles();
  const navigation = useNavigation();
  const onPressHandler = () => {
    navigation.navigate(Screen.Search as never);
  };

  return (
    <TouchableOpacity
      onPress={onPressHandler}
      activeOpacity={0.7}
      style={styles.container}>
      <View>
        <Icon
          iconSetName={IconSetsEnum.MaterialIcons}
          size={moderateScale(25)}
          name="search"
          color={colors.textSecondary}
        />
      </View>

      <View style={styles.searchTextContainer}>
        <AppText textStyles={styles.searchText} type={ETextType.BODY_02}>
          Search Contacts
        </AppText>
      </View>
      <View>
        <Avatar
          username="Muhammad Yasir"
          size={moderateScale(33)}
          customTextStyles={styles.avatarTextStyles}
        />
      </View>
    </TouchableOpacity>
  );
};

export default SearchBar;
