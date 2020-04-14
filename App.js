import React from 'react';
import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers/reducer';
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';
import rootSaga from './sagas/sagas';
import AddContainer from './containers/AddContainer';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
export default function App() {
  return (
    <Provider store={store}>
      <AddContainer/>
    </Provider>
  );
}
sagaMiddleware.run(rootSaga);