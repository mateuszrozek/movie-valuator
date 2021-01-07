import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from "../../app/store";


export const ResultTable = () => {

    const movieCalculated = useSelector((state: RootState) => state.calculations.movieCalculated);

    const baseRateValue = useSelector((state: RootState) => state.config.baseRate.value);
    const extraRateValue = useSelector((state: RootState) => state.config.extraRate.value);
    const extraRateLimitValue = useSelector((state: RootState) => state.config.extraRateLimit.value);
    const colorGradingCostValue = useSelector((state: RootState) => state.config.colorGradingCost.value);
    const fireworksCostOneValue = useSelector((state: RootState) => state.config.fireworksCostOne.value);
    const fireworksCostTwoValue = useSelector((state: RootState) => state.config.fireworksCostTwo.value);
    const fireworksCostThreeValue = useSelector((state: RootState) => state.config.fireworksCostThree.value);

    const workHours = useSelector((state: RootState) => state.form.workHours);
    const fireworksLevel = useSelector((state: RootState) => state.form.fireworks);
    const colorGradingOrdered = useSelector((state: RootState) => state.form.colorGrading);
    const rawDuration = useSelector((state: RootState) => state.form.rawDuration);

    const defineRate = () => {
        if (rawDuration > extraRateLimitValue) {
            return extraRateValue;
        }
        return baseRateValue;
    }

    const defineFireworks = () => {
        let fireworksCoefficient = 1;
        switch (fireworksLevel) {
            case 1:
                fireworksCoefficient = fireworksCostOneValue;
                break;
            case 2:
                fireworksCoefficient = fireworksCostTwoValue;
                break;
            case 3:
                fireworksCoefficient = fireworksCostThreeValue;
                break;
        }
        return fireworksCoefficient;
    }

    const defineColorGrading = () => {
        if (colorGradingOrdered) {
            return colorGradingCostValue;
        }
        return 0;
    }

    const rate = defineRate();
    const fireworks = defineFireworks();
    const colorGrading = defineColorGrading();

    const calculatePrice = () => {

        const price = (rate * workHours * fireworks) + colorGrading;

        const rateTooltip = `Wynosi 
        ${baseRateValue}, jeśli długość materiału jest dłuższa niż ${extraRateLimitValue} min,
        ${extraRateValue}, jeśli jest mniejsza niż ${extraRateLimitValue} min`;
        const workHoursTooltip = `Ilość godzin pracy mnożona jest przez stawkę godzinową: ${rate} * ${workHours} = ${rate * workHours}`;
        const fireworksTooltip = `Wynosi: 
        1 dla braku fejerwerków,
        ${fireworksCostOneValue} dla podstawowych,
        ${fireworksCostTwoValue} dla średniozaawansowanych,
        ${fireworksCostThreeValue} dla zaawansowanych;
        Wartość jest mnożona razy stawkę godzinową oraz ilość godzin: ${rate} * ${workHours} * ${fireworks} = ${rate * workHours * fireworks}
        `;
        const colorGradingTooltip = `Jeśli jest zamówiony, do wyceny dodawane jest ${colorGradingCostValue} złotych:
        (${rate} * ${workHours} * ${fireworks}) + ${colorGrading} = ${(rate * workHours * fireworks) + colorGrading}
        `;

        return (
            <div className='mt-sm-5 container'>
                <div className='row border align-items-center'>
                    <div className='col-2 h6'>
                        Wzór:
                    </div>
                    <div className='col-1 '> (
                    </div>
                    <div className='col-1 '> stawka
                    </div>
                    <div className='col-1 '> *
                    </div>
                    <div className='col-1 '> godziny pracy
                    </div>
                    <div className='col-1 '> *
                    </div>
                    <div className='col-1 '> wsp. fajerwerek
                    </div>
                    <div className='col-1 '> )
                    </div>
                    <div className='col-1 '> +
                    </div>
                    <div className='col-1 '> color grading
                    </div>
                </div>
                <div className='row border align-items-center'>
                    <div className='col-2 h6'>
                        Wartości:
                    </div>
                    <div className='col-1'> (
                    </div>
                    <div className='col-1' data-toggle="tooltip" data-placement="top"
                         title={rateTooltip}> {rate}
                    </div>
                    <div className='col-1'> *
                    </div>
                    <div className='col-1' data-toggle="tooltip" data-placement="top"
                         title={workHoursTooltip}> {workHours}
                    </div>
                    <div className='col-1'> *
                    </div>
                    <div className='col-1' data-toggle="tooltip" data-placement="top"
                         title={fireworksTooltip}> {fireworks}
                    </div>
                    <div className='col-1'> )
                    </div>
                    <div className='col-1'> +
                    </div>
                    <div className='col-1' data-toggle="tooltip" data-placement="top"
                         title={colorGradingTooltip}> {colorGrading}
                    </div>
                </div>
                <h2 className='mt-sm-4'>Wycena filmu: {price} zł</h2>
            </div>
        );
    }

    return (
        <div>
            {movieCalculated && calculatePrice()}
        </div>
    );
}