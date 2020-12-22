import React from 'react';
import {Link} from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav>
            <section>
                <h1>Wyceniacz</h1>

                <div className='navContent'>
                    <div className='navLinks'>
                        <Link to='/'>Kalkulator</Link>
                        <Link to='/config'>Konfiguracja</Link>
                    </div>
                </div>
            </section>
        </nav>
    )
};