import {configureStore} from '@reduxjs/toolkit';
import formReducer from '../../src/feature/form/formSlice';
import configReducer from "../feature/config/configSlice";
import calculationsReducer from "../feature/calculations/calculationsSlice";

export interface RootState {
    config: {
        basePrice: {
            name: string,
            value: number
        },
        rawToFinalCoefficient: number
    },
    form: {
        rawDuration: number,
        finalDuration: number,
        workHours: number,
        colorGrading: boolean
    },
    calculations: {
        finalValuation: string
    }
}

export default configureStore({
    reducer: {
        form: formReducer,
        config: configReducer,
        calculations: calculationsReducer
    }
});