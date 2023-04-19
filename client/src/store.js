import { configureStore } from '@reduxjs/toolkit';
import cardTitleReducer from './slices/cardTitleSlice';

export default configureStore({
    reducer: {
        cardTitle: cardTitleReducer,
    },
});