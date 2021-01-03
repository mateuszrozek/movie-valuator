import React, {ChangeEvent, useState} from 'react';
import {ValuationForm} from "./ValuationForm";
import {useDispatch, useSelector} from "react-redux";
import {finalValuationUpdated} from '../calculations/calculationsSlice';
import {RootState} from "../../app/store";

export const ValuationOptions = () => {

    const dispatch = useDispatch();

    const [thirdButton, setThirdButton] = useState(false);

    const limitOfCheapValue = useSelector((state: RootState) => state.config.limitOfCheap.value);
    const priceOfCheapValue = useSelector((state: RootState) => state.config.priceOfCheap.value);
    const limitOfConstantValue = useSelector((state: RootState) => state.config.limitOfConstant.value);
    const priceOfConstantValue = useSelector((state: RootState) => state.config.priceOfConstant.value);

    const limitOfConstantValueHours = limitOfConstantValue / 60;


    const radioButtonChanged = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setThirdButton(value === 'option3');
        switch (value) {
            case 'option1':
                dispatch(finalValuationUpdated({finalValuation: `${priceOfCheapValue} zł lub za darmo`}));
                break;
            case 'option2':
                dispatch(finalValuationUpdated({finalValuation: `Ryczałtem ${priceOfConstantValue} zł`}));
                break;
            case 'option3':
                dispatch(finalValuationUpdated({finalValuation: ''}))
                break;
        }
    };

    return (
        <div className='jumbotron container'>
            <fieldset className="form-group">
                <div className="row align-items-center justify-content-center h5">
                    <div className="col-8">
                        <div className="row align-items-center justify-content-center h5 border">
                            <legend className="col-form-label col text-right">Ile godzin pracy</legend>
                            <div className="col text-left">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1"
                                           value="option1" onChange={e => radioButtonChanged(e)}/>
                                    <label className="form-check-label" htmlFor="gridRadios1">
                                        Do {limitOfCheapValue} minut
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2"
                                           value="option2" onChange={e => radioButtonChanged(e)}/>
                                    <label className="form-check-label" htmlFor="gridRadios2">
                                        Do {limitOfConstantValueHours} godzin
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3"
                                           value="option3" onChange={e => radioButtonChanged(e)}/>
                                    <label className="form-check-label" htmlFor="gridRadios3">
                                        Powyżej {limitOfConstantValueHours} godzin
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </fieldset>
            {thirdButton && <ValuationForm/>}
        </div>
    );
}