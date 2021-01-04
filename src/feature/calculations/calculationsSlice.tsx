import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    finalValuation: '',
    movieCalculated: false
}

const calculationsSlice = createSlice({
        name: 'calculations',
        initialState,
        reducers: {
            finalValuationUpdated(state, action) {
                const {finalValuation} = action.payload;
                state.finalValuation = finalValuation;
            },
            movieCalculatedUpdated(state, action) {
                const {movieCalculated} = action.payload;
                state.movieCalculated = movieCalculated;
            }
        }
    }
);

export const {finalValuationUpdated, movieCalculatedUpdated} = calculationsSlice.actions;

export default calculationsSlice.reducer;