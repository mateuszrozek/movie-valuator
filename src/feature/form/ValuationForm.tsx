import React, {ChangeEvent, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ValuationForm = () => {

    const [rawH, setRawH] = useState<number>(0);
    const [rawM, setRawM] = useState<number>(0);
    const [finalH, setFinalH] = useState<number>(0);
    const [finalM, setFinalM] = useState<number>(0);

    const onRawHChanged = (e: ChangeEvent<HTMLInputElement>) => setRawH(castStringToNumberSafely(e.target.value));
    const onRawMChanged = (e: ChangeEvent<HTMLInputElement>) => setRawM(castStringToNumberSafely(e.target.value))
    const onFinalHChanged = (e: ChangeEvent<HTMLInputElement>) => setFinalH(castStringToNumberSafely(e.target.value))
    const onFinalMChanged = (e: ChangeEvent<HTMLInputElement>) => setFinalM(castStringToNumberSafely(e.target.value))

    const castStringToNumberSafely = (str: string): number => {
        if (str === undefined) {
            return 0;
        }
        return Number(str);
    }

    const calculate = () => {
        console.log(rawH);
        console.log(rawM);
        console.log(finalH);
        console.log(finalM);
    }

    return (
        <section className='jumbotron'>
            <h2>Wycena filmu</h2>
            <form>
                <div className="container">
                    <div className="row flex-row">
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
                        <div className='col form-group border'>
                            <label className="col-form-label" htmlFor="inlineFormCustomSelectPref">Fajerwerki</label>
                            <select className='custom-select' required id="inlineFormCustomSelectPref">
                                <option defaultValue={2}>Wybierz...</option>
                                <option value="1">Mało</option>
                                <option value="2">Średnio</option>
                                <option value="3">Dużo</option>
                            </select>
                        </div>
                    </div>
                    <div className="row align-items-baseline">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" htmlFor="exampleCheck1">Mastering dźwięku</label>
                        </div>
                    </div>
                    <div className="row align-items-baseline">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" htmlFor="exampleCheck1">Mastering obrazu</label>
                        </div>

                    </div>
                </div>
            </form>
            <button className='button' onClick={calculate}>Oblicz</button>
        </section>
    );
}