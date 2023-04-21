import { createSlice } from "@reduxjs/toolkit";

const buttonNameSlice = createSlice({
    name: 'buttonName',
    initialState: '',
    reducers: {
        setButtonName: (state, action) => action.payload,
    },
});

export const { setButtonName } = buttonNameSlice.actions;

export default buttonNameSlice.reducer;