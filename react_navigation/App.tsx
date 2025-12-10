/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// import 'react-native-gesture-handler'; // 내 생각엔 이제 안해도 되는건가?

import { NavigationContainer } from '@react-navigation/native';
// import DrawerNavigator from './src/Drawers/DrawerNavigator';
// import TabNavigator from './src/Drawers/Tab/tab_navigator';
import { StackNavigator } from './src/Drawers/Nav/StackNavigator';
// import { StackNavigator } from './src/Drawers/Nav/StackNavigator';

function App() {
  return (
    <NavigationContainer>
      <StackNavigator/>
      {/* <DrawerNavigator /> */}
    </NavigationContainer>
  );
}

export default App;
