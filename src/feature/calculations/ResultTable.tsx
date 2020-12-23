import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from "../../app/store";


export const ResultTable = () => {

    const basePrice = useSelector((state: RootState) => state.config.basePrice.value);
    const rawDuration = useSelector((state: RootState) => state.form.rawDuration);
    const finalDuration = useSelector((state: RootState) => state.form.finalDuration);

    const calculatePrice = (rawDuration: number, finalDuration: number) => {
        if (rawDuration > 0 && finalDuration > 0) {
            const ratio = rawDuration / finalDuration;
            return ratio * basePrice;
        }
        return 0;
    }

    return (
        <div>
            <h1>Wycena filmu: {calculatePrice(rawDuration, finalDuration)}</h1>
        </div>
    )
}