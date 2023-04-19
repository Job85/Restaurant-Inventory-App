import { configureStore } from '@reduxjs/toolkit';
import cardTitleReducer from './slices/cardTitleSlice';

export const store = configureStore({
    reducer: {
        cardTitle: cardTitleReducer,
    },
});