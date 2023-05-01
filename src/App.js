import { StatusBar } from 'expo-status-bar';
import Navigation from './navigations';
import { LogBox } from 'react-native';
import { UserProvier } from './contexts/UserContext';

const App = () => {
  LogBox.ignoreLogs(['AsyncStorage has been extracted from react-native core']);

  return (
    <UserProvier>
      <StatusBar style={'dark'} />
      <Navigation />
    </UserProvier>
  );
};

export default App;
