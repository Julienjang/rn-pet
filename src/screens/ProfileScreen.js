import { Button, StyleSheet, Text, View } from 'react-native';
import { useUserState } from '../contexts/UserContext';

const ProfileScreen = () => {
  const [, setUser] = useUserState();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ProfileScreen</Text>
      <Button title={'signout'} onPress={() => setUser({})} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
  },
});

export default ProfileScreen;
