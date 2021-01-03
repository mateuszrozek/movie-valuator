import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    limitOfCheap: {
        name: 'Limit niskiej wyceny',
        value: 15
    },
    priceOfCheap: {
        name: 'Granica niskiej wyceny',
        value: 100
    },
    limitOfConstant: {
        name: 'Granica wyceny po ryczałcie',
        value: 480
    },
    priceOfConstant: {
        name: 'Granica ryczałtowej wyceny',
        value: 400
    },
    baseRate: {
        name: 'Stawka podstawowa',
        value: 50
    },
    extraRate: {
        name: 'Stawka podwższona',
        value: 55
    },
    extraRateLimit: {
        name: 'Granica niższej stawki (ilość materiału)',
        value: 90
    },
    colorGradingCost: {
        name: 'Koszt Color Gradingu (za 5 minut filmu)',
        value: 200
    },
    fireworksCostOne: {
        name: 'Współczynnik za podstawowowe fajerwerki',
        value: 1.2
    },
    fireworksCostTwo: {
        name: 'Współczynnik za średniozaawansowane fajerwerki',
        value: 1.5
    },
    fireworksCostThree: {
        name: 'Współczynnik za zaawansowane fajerwerki',
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