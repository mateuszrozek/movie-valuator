import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ValuationConfig = () => {
    return (
        <section>
            <div className="btn-group">
                <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                    Fajerweki
                </button>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="/#">Mało</a>
                    <a className="dropdown-item" href="/#">Another action</a>
                    <a className="dropdown-item" href="/#">Something else here</a>
                </div>
            </div>
        </section>
    );
};