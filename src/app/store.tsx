import {configureStore} from '@reduxjs/toolkit';
import formReducer from '../../src/feature/form/formSlice';
import configReducer from "../feature/config/configSlice";
import calculationsReducer from "../feature/calculations/calculationsSlice";

export interface RootState {
    config: {
        limitOfCheap: {
            name: string,
            value: number
        },
        priceOfCheap: {
            name: string,
            value: number
        },
        limitOfConstant: {
            name: string,
            value: number
        },
        priceOfConstant: {
            name: string,
            value: number
        },
        baseRate: {
            name: string,
            value: number
        },
        extraRate: {
            name: string,
            value: number
        },
        extraRateLimit: {
            name: string,
            value: number
        },
        colorGradingCost: {
            name: string,
            value: number
        },
        fireworksCostZero: {
            name: string,
            value: number
        },
        fireworksCostOne: {
            name: string,
            value: number
        },
        fireworksCostTwo: {
            name: string,
            value: number
        },
        fireworksCostThree: {
            name: string,
            value: number
        }
    },
    form: {
        rawDuration: number,
        finalDuration: number,
        workHours: number,
        colorGrading: boolean,
        fireworks: number
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