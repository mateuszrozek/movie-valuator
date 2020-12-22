import {configureStore} from '@reduxjs/toolkit';
import formReducer from '../../src/feature/form/formSlice';
import configReducer from "../feature/config/configSlice";

export interface RootState {
    config: {
        basePrice: number,
        rawToFinalCoefficient: number
    },
    form: {
        rawDuration: number,
        finalDuration: number
    }
}

export default configureStore({
    reducer: {
        form: formReducer,
        config: configReducer
    }
});