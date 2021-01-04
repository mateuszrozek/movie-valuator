import React, {ChangeEvent, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {castStringToNumberSafely} from "../utils/Utils";
import {saveConfiguration} from './configSlice';

export const ValuationConfig = () => {

    const dispatch = useDispatch();

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

    const [newLimitOfCheapValue, setNewLimitOfCheapValue] = useState(limitOfCheapValue);
    const [newPriceOfCheapValue, setNewPriceOfCheapValue] = useState(priceOfCheapValue);
    const [newLimitOfConstantValue, setNewLimitOfConstantValue] = useState(limitOfConstantValue);
    const [newPriceOfConstantValue, setNewPriceOfConstantValue] = useState(priceOfConstantValue);
    const [newBaseRateValue, setNewBaseRateValue] = useState(baseRateValue);
    const [newExtraRateValue, setNewExtraRateValue] = useState(extraRateValue);
    const [newExtraRateLimitValue, setNewExtraRateLimitValue] = useState(extraRateLimitValue);
    const [newColorGradingCostValue, setNewColorGradingCostValue] = useState(colorGradingCostValue);
    const [newFireworksCostOneValue, setNewFireworksCostOneValue] = useState(fireworksCostOneValue);
    const [newFireworksCostTwoValue, setNewFireworksCostTwoValue] = useState(fireworksCostTwoValue);
    const [newFireworksCostThreeValue, setNewFireworksCostThreeValue] = useState(fireworksCostThreeValue);

    const newLimitOfCheapValueChanged = (e: ChangeEvent<HTMLInputElement>) => setNewLimitOfCheapValue(castStringToNumberSafely(e.target.value));
    const newPriceOfCheapValueChanged = (e: ChangeEvent<HTMLInputElement>) => setNewPriceOfCheapValue(castStringToNumberSafely(e.target.value));
    const newLimitOfConstantValueChanged = (e: ChangeEvent<HTMLInputElement>) => setNewLimitOfConstantValue(castStringToNumberSafely(e.target.value));
    const newPriceOfConstantValueChanged = (e: ChangeEvent<HTMLInputElement>) => setNewPriceOfConstantValue(castStringToNumberSafely(e.target.value));
    const newBaseRateValueChanged = (e: ChangeEvent<HTMLInputElement>) => setNewBaseRateValue(castStringToNumberSafely(e.target.value));
    const newExtraRateValueChanged = (e: ChangeEvent<HTMLInputElement>) => setNewExtraRateValue(castStringToNumberSafely(e.target.value));
    const newExtraRateLimitValueChanged = (e: ChangeEvent<HTMLInputElement>) => setNewExtraRateLimitValue(castStringToNumberSafely(e.target.value));
    const newColorGradingCostValueChanged = (e: ChangeEvent<HTMLInputElement>) => setNewColorGradingCostValue(castStringToNumberSafely(e.target.value));
    const newFireworksCostOneValueChanged = (e: ChangeEvent<HTMLInputElement>) => setNewFireworksCostOneValue(castStringToNumberSafely(e.target.value));
    const newFireworksCostTwoValueChanged = (e: ChangeEvent<HTMLInputElement>) => setNewFireworksCostTwoValue(castStringToNumberSafely(e.target.value));
    const newFireworksCostThreeValueChanged = (e: ChangeEvent<HTMLInputElement>) => setNewFireworksCostThreeValue(castStringToNumberSafely(e.target.value));

    const saveData = () => {
        dispatch(saveConfiguration({
            limitOfCheap: newLimitOfCheapValue,
            priceOfCheap: newPriceOfCheapValue,
            limitOfConstant: newLimitOfConstantValue,
            priceOfConstant: newPriceOfConstantValue,
            baseRate: newBaseRateValue,
            extraRate: newExtraRateValue,
            extraRateLimit: newExtraRateLimitValue,
            colorGradingCost: newColorGradingCostValue,
            fireworksCostOne: newFireworksCostOneValue,
            fireworksCostTwo: newFireworksCostTwoValue,
            fireworksCostThree: newFireworksCostThreeValue
        }));
    }

    const dataValid = true;

    return (
        <section className='jumbotron'>
            <h2 className='mb-sm-3'>Konfiguracja</h2>
            <div className='container'>
                <div className='form-group'>
                    <div className='row border justify-content-center align-items-center'>
                        <div className='col text-right'>
                            <p>{limitOfCheapName}</p>
                        </div>
                        <div className='col '>
                            <input type='number' value={newLimitOfCheapValue}
                                   onChange={e => newLimitOfCheapValueChanged(e)}/>
                        </div>
                    </div>
                    <div className='row border justify-content-center align-items-center'>
                        <div className='col text-right'>
                            <p>{priceOfCheapName}</p>
                        </div>
                        <div className='col'>
                            <input type='number' value={newPriceOfCheapValue}
                                   onChange={e => newPriceOfCheapValueChanged(e)}/>
                        </div>
                    </div>
                </div>
                <div className='form-group'>
                    <div className='row border justify-content-center align-items-center'>
                        <div className='col text-right'>
                            <p>{limitOfConstantName}</p>
                        </div>
                        <div className='col'>
                            <input type='number' value={newLimitOfConstantValue}
                                   onChange={e => newLimitOfConstantValueChanged(e)}/>
                        </div>
                    </div>
                    <div className='row border justify-content-center align-items-center'>
                        <div className='col text-right'>
                            <p>{priceOfConstantName}</p>
                        </div>
                        <div className='col'>
                            <input type='number' value={newPriceOfConstantValue}
                                   onChange={e => newPriceOfConstantValueChanged(e)}/>
                        </div>
                    </div>
                </div>
                <div className='form-group'>
                    <div className='row border justify-content-center align-items-center'>
                        <div className='col text-right'>
                            <p>{baseRateName}</p>
                        </div>
                        <div className='col'>
                            <input type='number' value={newBaseRateValue} onChange={e => newBaseRateValueChanged(e)}/>
                        </div>
                    </div>
                    <div className='row border justify-content-center align-items-center'>
                        <div className='col text-right'>
                            <p>{extraRateName}</p>
                        </div>
                        <div className='col'>
                            <input type='number' value={newExtraRateValue} onChange={e => newExtraRateValueChanged(e)}/>
                        </div>
                    </div>
                    <div className='row border justify-content-center align-items-center'>
                        <div className='col text-right'>
                            <p>{extraRateLimitName}</p>
                        </div>
                        <div className='col'>
                            <input type='number' value={newExtraRateLimitValue}
                                   onChange={e => newExtraRateLimitValueChanged(e)}/>
                        </div>
                    </div>
                </div>

                <div className='form-group'>
                    <div className='row border justify-content-center align-items-center'>
                        <div className='col text-right'>
                            <p>{colorGradingCostName}</p>
                        </div>
                        <div className='col'>
                            <input type='number' value={newColorGradingCostValue}
                                   onChange={e => newColorGradingCostValueChanged(e)}/>
                        </div>
                    </div>
                </div>

                <div className='form-group'>
                    <div className='row border justify-content-center align-items-center'>
                        <div className='col text-right'>
                            <p>{fireworksCostOneName}</p>
                        </div>
                        <div className='col'>
                            <input type='number' value={newFireworksCostOneValue}
                                   onChange={e => newFireworksCostOneValueChanged(e)}/>
                        </div>
                    </div>
                    <div className='row border justify-content-center align-items-center'>
                        <div className='col text-right'>
                            <p>{fireworksCostTwoName}</p>
                        </div>
                        <div className='col'>
                            <input type='number' value={newFireworksCostTwoValue}
                                   onChange={e => newFireworksCostTwoValueChanged(e)}/>
                        </div>
                    </div>
                    <div className='row border justify-content-center align-items-center'>
                        <div className='col text-right'>
                            <p>{fireworksCostThreeName}</p>
                        </div>
                        <div className='col'>
                            <input type='number' value={newFireworksCostThreeValue}
                                   onChange={e => newFireworksCostThreeValueChanged(e)}/>
                        </div>
                    </div>
                </div>

                <button className='button mt-sm-2' disabled={!dataValid} onClick={saveData}>Zapisz</button>
            </div>
        </section>
    );
};