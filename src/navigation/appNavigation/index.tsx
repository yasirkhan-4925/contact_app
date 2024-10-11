import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screen} from '@app/navigation/constant';
import {
  HomeScreen,
  SearchScreen,
  ContactDetailsScreen,
  CreateContact,
} from '@app/screens';
import StackScreen from '../stackScreen';

const RootStack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={Screen.Home}
        screenOptions={{headerShown: false}}>
        {StackScreen({
          name: Screen.Home,
          component: HomeScreen,
        })}
        {StackScreen({
          name: Screen.ContactDetails,
          component: ContactDetailsScreen,
        })}
        {StackScreen({
          name: Screen.Search,
          component: SearchScreen,
        })}
        {StackScreen({
          name: Screen.CreateContact,
          component: CreateContact,
        })}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
