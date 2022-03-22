import { applyMiddleware, createStore } from "redux";
import logger from 'redux-logger'
import rootReducer from './root.reducer'
import { persistStore } from 'redux-persist'
import { fetchCollectionsStart} from './shop/shop.sagas'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(fetchCollectionsStart)

export const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
