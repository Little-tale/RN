import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, View, Button } from 'react-native';
import { RootStackParamList } from '../App';

type UserScreenProps = NativeStackScreenProps<RootStackParamList, 'User'>;

function UserScreen(props: UserScreenProps) {
  const { userName } = props.route.params;
  return (
    <View>
      <Text>User Screen</Text>
      <Button
        title="Go Back"
        onPress={() =>
          // props.navigation.navigate('Home')
          props.navigation.goBack()
        }
      />
      <Text>{userName}</Text>
    </View>
  );
}

export default UserScreen;
