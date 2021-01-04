import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from "../../app/store";


export const ResultTable = () => {

    const finalValuation = useSelector((state: RootState) => state.calculations.finalValuation)
    const movieCalculated = useSelector((state: RootState) => state.calculations.movieCalculated)


    const baseRate = useSelector((state: RootState) => state.config.baseRate.value);
    const rawDuration = useSelector((state: RootState) => state.form.rawDuration);
    const finalDuration = useSelector((state: RootState) => state.form.finalDuration);

    const calculatePrice = () => {
        if (rawDuration > 0 && finalDuration > 0) {
            const ratio = rawDuration / finalDuration;
            return ratio * baseRate;
        }
        return (
            <div className='mt-sm-2'>
                <h1>EXAMPLE</h1>
            </div>
        );
    }

    return (
        <div>
            {movieCalculated && calculatePrice()}
        </div>
    );
}