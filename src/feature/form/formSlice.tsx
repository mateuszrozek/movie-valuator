import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    rawDuration: 0,
    finalDuration: 0
}

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        formUpdated(state, action) {
            const {rawDuration, finalDuration} = action.payload;
            state.rawDuration = rawDuration;
            state.finalDuration = finalDuration;
        },
        rawDurationUpdated(state, action) {
            const {rawDuration} = action.payload;
            state.rawDuration = rawDuration;
        },
        finalDurationUpdated(state, action) {
            const {finalDuration} = action.payload;
            state.finalDuration = finalDuration;
        }
    }
});


export const {formUpdated, rawDurationUpdated, finalDurationUpdated} = formSlice.actions;

export default formSlice.reducer;