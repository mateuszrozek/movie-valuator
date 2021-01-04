import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from "../../app/store";


export const ResultTable = () => {

    const finalValuation = useSelector((state: RootState) => state.calculations.finalValuation);
    const movieCalculated = useSelector((state: RootState) => state.calculations.movieCalculated);

    const limitOfCheapName = useSelector((state: RootState) => state.config.limitOfCheap.name);
    const limitOfCheapValue = useSelector((state: RootState) => state.config.limitOfCheap.value);
    const priceOfCheapName = useSelector((state: RootState) => state.config.priceOfCheap.name);
    const priceOfCheapValue = useSelector((state: RootState) => state.config.priceOfCheap.value);
    const limitOfConstantName = useSelector((state: RootState) => state.config.limitOfConstant.name);
    const limitOfConstantValue = useSelector((state: RootState) => state.config.limitOfConstant.value);
    const priceOfConstantName = useSelector((state: RootState) => state.config.priceOfConstant.name);
    const priceOfConstantValue = useSelector((state: RootState) => state.config.priceOfConstant.value);
    const baseRateName = useSelector((state: RootState) => state.config.baseRate.name);
    const baseRateValue = useSelector((state: RootState) => state.config.baseRate.value);
    const extraRateName = useSelector((state: RootState) => state.config.extraRate.name);
    const extraRateValue = useSelector((state: RootState) => state.config.extraRate.value);
    const extraRateLimitName = useSelector((state: RootState) => state.config.extraRateLimit.name);
    const extraRateLimitValue = useSelector((state: RootState) => state.config.extraRateLimit.value);
    const colorGradingCostName = useSelector((state: RootState) => state.config.colorGradingCost.name);
    const colorGradingCostValue = useSelector((state: RootState) => state.config.colorGradingCost.value);
    const fireworksCostOneName = useSelector((state: RootState) => state.config.fireworksCostOne.name);
    const fireworksCostOneValue = useSelector((state: RootState) => state.config.fireworksCostOne.value);
    const fireworksCostTwoName = useSelector((state: RootState) => state.config.fireworksCostTwo.name);
    const fireworksCostTwoValue = useSelector((state: RootState) => state.config.fireworksCostTwo.value);
    const fireworksCostThreeName = useSelector((state: RootState) => state.config.fireworksCostThree.name);
    const fireworksCostThreeValue = useSelector((state: RootState) => state.config.fireworksCostThree.value);

    const workHours = useSelector((state: RootState) => state.form.workHours);
    const fireworksLevel = useSelector((state: RootState) => state.form.fireworks);
    const colorGradingOrdered = useSelector((state: RootState) => state.form.colorGrading);
    const rawDuration = useSelector((state: RootState) => state.form.rawDuration);
    const finalDuration = useSelector((state: RootState) => state.form.finalDuration);

    const calculatePrice = () => {

        const rate = defineRate();
        const fireworks = defineFireworks();
        const colorGrading = defineColorGrading();

        const price = (rate * workHours * fireworks) + colorGrading;

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
                    <div className='col-1'> {rate}
                    </div>
                    <div className='col-1'> *
                    </div>
                    <div className='col-1'> {workHours}
                    </div>
                    <div className='col-1'> *
                    </div>
                    <div className='col-1'> {fireworks}
                    </div>
                    <div className='col-1'> )
                    </div>
                    <div className='col-1'> +
                    </div>
                    <div className='col-1'> {colorGrading}
                    </div>
                </div>
                <h2 className='mt-sm-4'>Wycena filmu: {price} zł</h2>
            </div>
        );
    }

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
        let colorGrading = 0;
        if (colorGradingOrdered) {
            colorGrading = colorGradingCostValue * (finalDuration / 5);
        }
        return colorGrading;
    }

    return (
        <div>
            {movieCalculated && calculatePrice()}
        </div>
    );
}