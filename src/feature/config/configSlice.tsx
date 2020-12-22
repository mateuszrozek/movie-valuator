import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    basePrice: 300,
    rawToFinalCoefficient: 2.0
}

const configSlice = createSlice({
        name: 'config',
        initialState,
        reducers:{}
    }

);

export default configSlice.reducer;