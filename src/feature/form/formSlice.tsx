import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    rawDuration: 0,
    finalDuration: 0,
    workHours: 8,
    colorGrading: false,
    fireworks: 0
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
        },
        sliderUpdated(state, action) {
            const {fireworks} = action.payload;
            state.fireworks = fireworks;
        }
    }
});


export const {
    formUpdated,
    rawDurationUpdated,
    finalDurationUpdated,
    workHoursUpdated,
    colorGradingUpdated,
    sliderUpdated
} = formSlice.actions;

export default formSlice.reducer;