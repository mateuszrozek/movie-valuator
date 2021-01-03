import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from "../../app/store";


export const ResultTable = () => {

    const finalValuation = useSelector((state: RootState) => state.calculations.finalValuation)


    const baseRate = useSelector((state: RootState) => state.config.baseRate.value);
    const rawDuration = useSelector((state: RootState) => state.form.rawDuration);
    const finalDuration = useSelector((state: RootState) => state.form.finalDuration);

    const calculatePrice = (rawDuration: number, finalDuration: number) => {
        if (rawDuration > 0 && finalDuration > 0) {
            const ratio = rawDuration / finalDuration;
            return ratio * baseRate;
        }
        return 0;
    }

    return (
        <div>
            {(finalValuation !== '' ? <h1>Wycena filmu: {finalValuation}</h1> : '')}
        </div>
    )
}