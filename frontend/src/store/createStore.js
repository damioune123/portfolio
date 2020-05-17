import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const stateLogger = createLogger({ stateTransformer: state => state.toJS() });

export const initStore = () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware, stateLogger)
  )
  store.sagaTask = sagaMiddleware.run(rootSaga)
  return store
}
