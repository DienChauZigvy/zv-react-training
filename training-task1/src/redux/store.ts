import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import createSagaMiddleware from "redux-saga";
import storage from 'redux-persist/lib/storage' 
import authReducer from './auth/authSlice'
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    auth: authReducer
})

const persistConfig = {
    key: 'root',
    storage,
}

  const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch