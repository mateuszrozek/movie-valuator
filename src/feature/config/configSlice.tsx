import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    limitOfCheap: {
        name: 'Czas niskiej wyceny [min]',
        value: 15
    },
    priceOfCheap: {
        name: 'Wartość niskiej wyceny [zł]',
        value: 100
    },
    limitOfConstant: {
        name: 'Czas ryczałtowej wyceny [min]',
        value: 480
    },
    priceOfConstant: {
        name: 'Wartość ryczałtowej wyceny [zł]',
        value: 400
    },
    baseRate: {
        name: 'Stawka podstawowa [zł]',
        value: 50
    },
    extraRate: {
        name: 'Stawka podwyższona [zł]',
        value: 55
    },
    extraRateLimit: {
        name: 'Graniczna ilość materiału pomiędzy stawkami [min]',
        value: 90
    },
    colorGradingCost: {
        name: 'Dodatkowy koszt Color Gradingu [zł]',
        value: 200
    },
    fireworksCostOne: {
        name: 'Współczynnik za podstawowowe fajerwerki [-]',
        value: 1.2
    },
    fireworksCostTwo: {
        name: 'Współczynnik za średniozaawansowane fajerwerki [-]',
        value: 1.5
    },
    fireworksCostThree: {
        name: 'Współczynnik za zaawansowane fajerwerki [-]',
        value: 2
    },
}

const configSlice = createSlice({
        name: 'config',
        initialState,
        reducers: {
            saveConfiguration(state, action) {
                const {
                    limitOfCheap,
                    priceOfCheap,
                    limitOfConstant,
                    priceOfConstant,
                    baseRate,
                    extraRate,
                    extraRateLimit,
                    colorGradingCost,
                    fireworksCostOne,
                    fireworksCostTwo,
                    fireworksCostThree
                } = action.payload;
                state.limitOfCheap.value = limitOfCheap;
                state.priceOfCheap.value = priceOfCheap;
                state.limitOfConstant.value = limitOfConstant;
                state.priceOfConstant.value = priceOfConstant;
                state.baseRate.value = baseRate;
                state.extraRate.value = extraRate;
                state.extraRateLimit.value = extraRateLimit;
                state.colorGradingCost.value = colorGradingCost;
                state.fireworksCostOne.value = fireworksCostOne;
                state.fireworksCostTwo.value = fireworksCostTwo;
                state.fireworksCostThree.value = fireworksCostThree;
            }
        }
    }
);

export const {saveConfiguration} = configSlice.actions;

export default configSlice.reducer;