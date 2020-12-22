import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ValuationForm = () => {

    return (
        <section className='jumbotron'>
            <h2>Wycena filmu</h2>
            <form>
                <div className="container">
                    <div className="row flex-row">
                        <div className="col form-group border">
                            <label className='col-form-label'>Ilość materiału</label>
                            <div className="form-inline">
                                <input id='h' name='h' type='number' min='0' max='24'
                                       className='form-control col-sm-3'/>
                                <label htmlFor='h'>h</label>
                                <input id='m' name='m' type='number' min='0' max='59'
                                       className='form-control col-sm-4'/>
                                <label htmlFor='m'>m</label>
                            </div>
                        </div>
                        <div className="col form-group border">
                            <label className='col-form-label'>Długość docelowa</label>
                            <div className="form-inline ">
                                <input id='h' name='h' type='number' min='0' max='24'
                                       className='form-control col-sm-3'/>
                                <label htmlFor='h'>h</label>
                                <input id='m' name='m' type='number' min='0' max='59'
                                       className='form-control col-sm-4'/>
                                <label htmlFor='m'>m</label>
                            </div>
                        </div>
                        <div className='col form-group border'>
                            <label className="col-form-label" htmlFor="inlineFormCustomSelectPref">Fajerwerki</label>
                            <select className='custom-select' required id="inlineFormCustomSelectPref">
                                <option selected>Wybierz...</option>
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
            <button className='button'>Oblicz</button>
        </section>
    );
}