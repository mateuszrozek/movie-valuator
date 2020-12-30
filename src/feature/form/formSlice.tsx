import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    rawDuration: 0,
    finalDuration: 0,
    workHours: 9,
    colorGrading: false
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
        },
        workHoursUpdated(state, action) {
            const {workHours} = action.payload;
            state.workHours = workHours;
        },
        colorGradingUpdated(state, action) {
            const {colorGrading} = action.payload;
            state.colorGrading = colorGrading;
        }
    }
});


export const {
    formUpdated,
    rawDurationUpdated,
    finalDurationUpdated,
    workHoursUpdated,
    colorGradingUpdated
} = formSlice.actions;

export default formSlice.reducer;