import React, {ChangeEvent, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    colorGradingUpdated,
    finalDurationUpdated,
    rawDurationUpdated,
    sliderUpdated,
    workHoursUpdated
} from './formSlice';
import {movieCalculatedUpdated} from '../calculations/calculationsSlice';
import {RootState} from "../../app/store";
import {castStringToNumberSafely} from "../utils/Utils";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import {ResultTable} from "../calculations/ResultTable";

export const ValuationForm = () => {

    const [rawH, setRawH] = useState<number>(0);
    const [rawM, setRawM] = useState<number>(0);
    const [finalH, setFinalH] = useState<number>(0);
    const [finalM, setFinalM] = useState<number>(0);
    const [workHours, setWorkHours] = useState<number>(9);

    const dispatch = useDispatch();

    const rawDuration = useSelector((state: RootState) => state.form.rawDuration);
    const finalDuration = useSelector((state: RootState) => state.form.finalDuration);

    const onRawHChanged = (e: ChangeEvent<HTMLInputElement>) => processRaw(castStringToNumberSafely(e.target.value), true);
    const onRawMChanged = (e: ChangeEvent<HTMLInputElement>) => processRaw(castStringToNumberSafely(e.target.value), false);
    const onFinalHChanged = (e: ChangeEvent<HTMLInputElement>) => processFinal(castStringToNumberSafely(e.target.value), true);
    const onFinalMChanged = (e: ChangeEvent<HTMLInputElement>) => processFinal(castStringToNumberSafely(e.target.value), false);

    const onWorkHoursChanged = (e: ChangeEvent<HTMLInputElement>) => processWorkHours(castStringToNumberSafely(e.target.value));

    const onColorGradingChanged = (e: ChangeEvent<HTMLInputElement>) => processColorGrading(e.target.checked);

    const processColorGrading = (colorGrading: boolean) => {
        dispatch(colorGradingUpdated({colorGrading}));
    }

    const processWorkHours = (hours: number) => {
        setWorkHours(hours);
        dispatch(workHoursUpdated({workHours: hours}));
    }

    const processRaw = (value: number, hours: boolean) => {
        let rawDuration;
        if (hours) {
            setRawH(value);
            rawDuration = calculateDuration(value, rawM);
        } else {
            setRawM(value);
            rawDuration = calculateDuration(rawH, value);
        }
        dispatch(rawDurationUpdated({rawDuration}));
    }

    const processFinal = (value: number, hours: boolean) => {
        let finalDuration;
        if (hours) {
            setFinalH(value);
            finalDuration = calculateDuration(value, finalM);
        } else {
            setFinalM(value)
            finalDuration = calculateDuration(finalH, value);
        }
        dispatch(finalDurationUpdated({finalDuration}));
    }

    const calculateMovieValuation = () => {
        dispatch(movieCalculatedUpdated({movieCalculated: true}));
    }

    const calculateDuration = (hours: number, minutes: number): number => {
        return 60 * hours + minutes;
    }

    const dataValid = rawDuration >= finalDuration && rawDuration > 0 && finalDuration > 0;

    const marks = [
        {
            value: 0,
            label: 'brak',
        },
        {
            value: 1,
            label: 'podstawowe',
        },
        {
            value: 2,
            label: 'średniozaawansowane',
        },
        {
            value: 3,
            label: 'zaawansowane',
        },
    ];


    const onSliderChanged = (event: any, newValue: number | number[]) => {
        dispatch(sliderUpdated({fireworks: newValue}));
    };

    const movieCalculated = useSelector((state: RootState) => state.calculations.movieCalculated)

    return (
        <section className='jumbotron'>
            <h2>Wycena filmu</h2>
            <form>
                <div className="container">
                    <div className="row">
                        <div className="col form-group border">
                            <label className='col-form-label'>Ilość godzin pracy</label>
                            <div className="form-inline justify-content-center">
                                <input id='work-hours' name='work-hours' type='number' min='8' max='999'
                                       className='form-control'
                                       value={workHours}
                                       onChange={(e) => onWorkHoursChanged(e)}/>
                            </div>
                        </div>
                        <div className="col form-group border">
                            <label className='col-form-label'>Ilość materiału</label>
                            <div className="form-inline">
                                <input id='raw-h' name='raw-h' type='number' min='0' max='23'
                                       className='form-control col-sm-3'
                                       value={rawH}
                                       onChange={(e) => onRawHChanged(e)}/>
                                <label htmlFor='raw-h'>h</label>
                                <input id='raw-m' name='raw-m' type='number' min='0' max='59'
                                       className='form-control col-sm-4'
                                       value={rawM}
                                       onChange={(e) => onRawMChanged(e)}/>
                                <label htmlFor='raw-m'>m</label>
                            </div>
                        </div>
                        <div className="col form-group border">
                            <label className='col-form-label'>Długość docelowa</label>
                            <div className="form-inline ">
                                <input id='final-h' name='final-h' type='number' min='0' max='24'
                                       className='form-control col-sm-3'
                                       value={finalH}
                                       onChange={(e) => onFinalHChanged(e)}/>
                                <label htmlFor='final-h'>h</label>
                                <input id='final-m' name='final-m' type='number' min='0' max='59'
                                       className='form-control col-sm-4'
                                       value={finalM}
                                       onChange={(e) => onFinalMChanged(e)}/>
                                <label htmlFor='final-m'>m</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col form-group border">
                            <Typography id="discrete-slider" gutterBottom>
                                Fajerwerki
                            </Typography>
                            <Slider
                                defaultValue={0}
                                aria-labelledby="discrete-slider"
                                valueLabelDisplay="auto"
                                step={1}
                                marks={marks}
                                min={0}
                                max={3}
                                onChange={onSliderChanged}
                            />
                        </div>
                    </div>
                    <div className="row align-items-baseline border">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"
                                   onChange={(e) => onColorGradingChanged(e)}/>
                            <label className="form-check-label" htmlFor="exampleCheck1">Color Grading</label>
                        </div>
                    </div>
                </div>
            </form>
            <button className='button mt-sm-2' disabled={!dataValid} onClick={calculateMovieValuation}>Oblicz</button>
            {movieCalculated && <ResultTable/>}
        </section>
    );
}