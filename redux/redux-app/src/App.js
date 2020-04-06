import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import TestComponent from './TestComponent';

//eslint-disable-next-line
const { store, persistor } = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <TestComponent />
    </Provider>
  );
};

export default App;
