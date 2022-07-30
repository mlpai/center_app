import { createTheme, ThemeProvider } from '@rneui/themed';
import React from 'react';
import { View } from 'react-native';

import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import Navigation from './src/routes';
import { store } from './src/store';


const theme = createTheme({
    Button: {
      raised: true,
    },
  });

const App = () => ( 
  <Provider store={store} >
    <ThemeProvider theme={theme} >
      <Navigation />
    </ThemeProvider>
  </Provider>
);

export default App;
