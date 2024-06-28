import { NavigationContainer } from '@react-navigation/native';
import 'react-native-get-random-values';
import { StatusBar } from 'react-native';
import Routes from './src/routes/stack.routes';
import { IconSelectionProvider } from './src/components/Context/IconSelectionContext';

export default function App() {
  return (
    <IconSelectionProvider>
      <NavigationContainer>
        <StatusBar backgroundColor="#000" barStyle="light-content" />
        <Routes />
      </NavigationContainer>
    </IconSelectionProvider>
  );
}


