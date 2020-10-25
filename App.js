import React from 'react';
import Index from './src';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';

export default function App() {
  const store = configureStore();

  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}

