import { NavigationContainer } from '@react-navigation/native';
import 'react-native-get-random-values';
import { StatusBar } from 'react-native';
import Routes from './src/routes/stack.routes';
import Deta from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#000" barStyle="light-content"/>
          <Routes/>
    </NavigationContainer>
  );
}


