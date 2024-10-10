import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

const Stack = createNativeStackNavigator();

interface Props {
  name: string;
  component: React.ComponentType<any>;
  params?: any;
  isModal?: boolean;
  gestureEnabled?: boolean;
}

const StackScreen: React.FC<Props> = props => {
  const {component, name, gestureEnabled = false} = props;
  return (
    <Stack.Screen
      name={name}
      component={component}
      options={{gestureEnabled: gestureEnabled}}
    />
  );
};

export default StackScreen;
