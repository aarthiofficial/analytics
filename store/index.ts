import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '@features/weather/weatherSlice';
import newsReducer from '@features/news/newsSlice';
import financeReducer from '@features/finance/financeSlice';
import authReducer from '@features/auth/authSlice';

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    news: newsReducer,
    finance: financeReducer,
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
