import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text, View } from 'react-native';
import { RootStackParamList } from '../App';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

function HomeScreen(props: HomeScreenProps) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go User"
        onPress={() => {
          props.navigation.navigate('User', { userName: 'Jaehyung' });
        }}
      />
    </View>
  );
}

export default HomeScreen;
