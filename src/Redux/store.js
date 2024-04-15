import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import reducers from "./Action/Reducer/index";
import { watchFetchProducts } from './profileSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), sagaMiddleware],
});

sagaMiddleware.run(watchFetchProducts);

export default store;
