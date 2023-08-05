import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
};

export const store = configureStore({
  reducer: persistReducer(persistConfig, todosReducer),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
