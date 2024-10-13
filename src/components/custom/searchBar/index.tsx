import {colors} from '@app/assets/colors';
import {useNavigation} from '@react-navigation/native';
import {Searchbar} from 'react-native-paper';

interface Props {
  placeholder: string;
  searchQuery: string;
  onChangeText: (text: string) => void;
}

const SearchBar = ({placeholder, onChangeText, searchQuery}: Props) => {
  const navigation = useNavigation();
  return (
    <Searchbar
      autoFocus
      style={{backgroundColor: colors.bgPrimary}}
      showDivider={false}
      onIconPress={() => navigation.goBack()}
      icon="keyboard-backspace"
      mode="view"
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={searchQuery}
    />
  );
};

export default SearchBar;
