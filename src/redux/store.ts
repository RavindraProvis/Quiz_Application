import { configureStore } from '@reduxjs/toolkit';
import questionSlice from './questionSlice';
export const store = configureStore({
    reducer: {
        questions: questionSlice,
    },
    // This is optional as Redux Toolkit includes redux-thunk by default
    // but you can add custom middleware here if needed
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    // Enhancer options for Redux DevTools
    devTools: process.env.NODE_ENV !== 'production',
});

// Define RootState and AppDispatch types for TypeScript support
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
