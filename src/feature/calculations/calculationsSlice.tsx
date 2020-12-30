import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    finalValuation: ''
}

const calculationsSlice = createSlice({
        name: 'calculations',
        initialState,
        reducers: {
            finalValuationUpdated(state, action) {
                const {finalValuation} = action.payload;
                state.finalValuation = finalValuation;
            },
        }
    }
);

export const {finalValuationUpdated} = calculationsSlice.actions;

export default calculationsSlice.reducer;