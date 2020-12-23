import React, {ChangeEvent, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {castStringToNumberSafely} from "../utils/Utils";
import {saveConfiguration} from './configSlice';

export const ValuationConfig = () => {

    const dispatch = useDispatch();

    const basePriceName = useSelector((state: RootState) => state.config.basePrice.name);
    const basePriceValue = useSelector((state: RootState) => state.config.basePrice.value);

    const [newBasePriceValue, setNewBasePriceValue] = useState(basePriceValue);

    const newBasePriceValueChanged = (e: ChangeEvent<HTMLInputElement>) => setNewBasePriceValue(castStringToNumberSafely(e.target.value));

    const saveData = () => {
        dispatch(saveConfiguration({basePriceValue: newBasePriceValue}));
    }

    const dataValid = true;

    return (
        <section className='jumbotron'>
            <h2>Konfiguracja</h2>
            <div className='container'>
                <div className='row border justify-content-center'>
                    <div className='col-4'>
                        <p>{basePriceName}</p>
                    </div>
                    <div className='col-4 '>
                        <input type='number' value={newBasePriceValue} onChange={e => newBasePriceValueChanged(e)}/>
                    </div>
                </div>
                <div className='row border justify-content-center'>
                    <div className='col-4'>
                        <p>{basePriceName}</p>
                    </div>
                    <div className='col-4 '>
                        <input type='number' value={newBasePriceValue} onChange={e => newBasePriceValueChanged(e)}/>
                    </div>
                </div>
                <div className='row border justify-content-center'>
                    <div className='col-4'>
                        <p>{basePriceName}</p>
                    </div>
                    <div className='col-4 '>
                        <input type='number' value={newBasePriceValue} onChange={e => newBasePriceValueChanged(e)}/>
                    </div>
                </div>
                <button className='button' disabled={!dataValid} onClick={saveData}>Zapisz</button>
            </div>
        </section>
    );
};