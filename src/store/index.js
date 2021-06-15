import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './ducks';
import sagas from './sagas';

import reactotron from '../config/ReactotronConfig';

const sagaMonitor = __DEV__ ? reactotron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({sagaMonitor});
const middleware = [];

let composed = applyMiddleware(...middleware, sagaMiddleware);

if (process.env.NODE_ENV !== 'production' || __DEV__) {
  composed = compose(
    applyMiddleware(...middleware, sagaMiddleware),

    reactotron.createEnhancer(),
  );
}

const store = createStore(reducers, composed);
sagaMiddleware.run(sagas);

export default store;
