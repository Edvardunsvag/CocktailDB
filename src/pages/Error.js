import React from 'react';
import { Link } from 'react-router-dom';

export default function Error() {
    return (
        <section className='error-page section'>
            <div className='error-container'>
                <h1>Ooops, its a dead end</h1>
                <Link className='btn btn-primary' to='/'>
                    Return Home
                </Link>
            </div>
        </section>
    );
}
