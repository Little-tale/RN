import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../home';
import { Alert, Button, StyleSheet, View } from 'react-native';
import UserScreen from '../../user';

export type RootStackParamList = {
  Home: undefined;
  User: {
    userName: string;
  };
};

const HomeStack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#a8ffb1',
        },
        headerTintColor: '#000000',
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold',
        },
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home 화면',
          headerRight: () => topRightButton(),
        }}
      />
      <HomeStack.Screen
        name="User"
        component={UserScreen}
        initialParams={{
          userName: 'JaeHyung',
        }}
      />
    </HomeStack.Navigator>
  );
};

function topRightButton() {
  return (
    <View style={style.topRightButton}>
      <Button
        title="Info"
        onPress={() => Alert.alert('Info', 'This is the Home screen')}
      />
      <Button
        title="Info"
        onPress={() => Alert.alert('Info', 'This is the Home screen')}
      />
    </View>
  );
}

const style = StyleSheet.create({
  topRightButton: {
    flexDirection: 'row',
  },
});

export { StackNavigator };
