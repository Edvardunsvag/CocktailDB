import React, { useEffect, useRef } from 'react';

export default function SearchForm({ setSearchTerm }) {
    const searchValue = useRef('');

    const searchCocktails = (e) => {
        setSearchTerm(searchValue.current.value);
    };

    useEffect(() => {
        searchValue.current.focus();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <section className='section'>
            <h2 className='section-title'>Search Cocktails</h2>
            <form className='form search-form' onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor=''>Search your favorite cocktail</label>
                    <input
                        type='text'
                        name='name'
                        id='name'
                        onChange={searchCocktails}
                        ref={searchValue}
                    />
                </div>
            </form>
        </section>
    );
}
