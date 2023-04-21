import { configureStore } from '@reduxjs/toolkit';
import cardTitleReducer from './slices/cardTitleSlice';
import buttonNameReducer from './slices/buttonNameSlice';

export default configureStore({
    reducer: {
        cardTitle: cardTitleReducer,
        buttonName: buttonNameReducer,
    },
});