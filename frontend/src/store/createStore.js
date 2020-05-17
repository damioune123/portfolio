import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import rootSaga from '../sagas';
import { initialState } from '../constants/initialState';

const sagaMiddleware = createSagaMiddleware();

const stateLogger = createLogger({ stateTransformer: state => state.toJS() });

export const initStore = (preloadState = initialState) => {
  const store = createStore(
      rootReducer,
      preloadState,
      applyMiddleware(sagaMiddleware, stateLogger)
  )
  store.sagaTask = sagaMiddleware.run(rootSaga)
  return store
}
