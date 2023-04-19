import { createSlice } from '@reduxjs/toolkit';

const cardTitleSlice = createSlice({
    name: 'cardTitle',
    initialState: '',
    reducers: {
        setCardTitle: (state, action) => action.payload,
    },
});

export const { setCardTitle } = cardTitleSlice.actions;

export default cardTitleSlice.reducer;