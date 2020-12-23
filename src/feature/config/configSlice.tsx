import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    basePrice: {
        name: 'Cena podstawowa',
        value: 300
    },
    rawToFinalCoefficient: 2.0
}

const configSlice = createSlice({
        name: 'config',
        initialState,
        reducers: {
            saveConfiguration(state, action) {
                const {basePriceValue} = action.payload;
                state.basePrice.value = basePriceValue;
            }
        }
    }
);

export const {saveConfiguration} = configSlice.actions;

export default configSlice.reducer;