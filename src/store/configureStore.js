import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';

import configReducer from './reducers/config';
import thunk from 'redux-thunk';

const composeEnhancers = compose;

export default () => {
  const store = createStore(
    combineReducers({
      config: configReducer,
    }),
    composeEnhancers(applyMiddleware(thunk)),
  );

  return store;
};
