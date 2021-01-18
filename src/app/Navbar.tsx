import React from 'react';
import {Link} from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav>
            <section>
                <h1 className='pt-sm-4 mb-sm-3'>Wyceniacz</h1>

                <div className='navContent'>
                    <div className='navLinks'>
                        <Link id='calculator' to='/'>Kalkulator</Link>
                        <Link id='configuration' to='/config'>Konfiguracja</Link>
                    </div>
                </div>
            </section>
        </nav>
    )
};