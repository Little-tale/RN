/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// import 'react-native-gesture-handler'; // 내 생각엔 이제 안해도 되는건가?
// import { StyleSheet, View, Text } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/home';
import UserScreen from './src/user';
import { Alert, Button, StyleSheet, View } from 'react-native';

export type RootStackParamList = {
  Home: undefined;
  User: {
    userName: string;
  };
};

const HomeStack = createNativeStackNavigator<RootStackParamList>();

function HomeNavigation() {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
}

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

function App() {
  return <HomeNavigation />;
}

export default App;
