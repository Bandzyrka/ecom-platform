import { persistStore, PersistConfig, persistReducer } from 'redux-persist'

import { applyMiddleware, createStore, compose, Middleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import storage from 'redux-persist/lib/storage';

import rootReducer from './root.reducer'
import rootSaga from "./root.saga";

const sagaMiddleware = createSagaMiddleware()

const middleWares = [
  process.env.NODE_ENV !== 'production' && logger,
  sagaMiddleware,
].filter((middleware): middleware is Middleware => Boolean(middleware));


export type RootState = ReturnType<typeof rootReducer>;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

type ExtendedPersistConfig = PersistConfig<RootState> & {
    whitelist: (keyof RootState)[];
  };

const persistConfig: ExtendedPersistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);


  const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);