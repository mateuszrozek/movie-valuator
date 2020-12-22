import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    rawDuration: 0,
    finalDuration: 0
}

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers:{
        formUpdated(state, action){
            const {rawDuration, finalDuration} = action.payload;
            state.rawDuration = rawDuration;
            state.finalDuration = finalDuration;
        }
    }
});


export const {formUpdated} = formSlice.actions;

export default formSlice.reducer;