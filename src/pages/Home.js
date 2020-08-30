import React, { useState, useEffect } from 'react';

import SearchForm from '../components/SearchForm';
import CocktailList from '../components/CocktailList';

export default function Home() {
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('s');
    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        setLoading(true);
        async function getDrinks() {
            try {
                const response = await fetch(
                    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
                );
                const data = await response.json();
                const { drinks } = data;
                if (drinks) {
                    const newItem = drinks.map((item) => {
                        const {
                            idDrink,
                            strDrink,
                            strDrinkThumb,
                            strAlcoholic,
                            strGlass,
                        } = item;
                        return {
                            id: idDrink,
                            name: strDrink,
                            img: strDrinkThumb,
                            info: strAlcoholic,
                            glass: strGlass,
                        };
                    });
                    setCocktails(newItem);
                } else {
                    setCocktails([]);
                }
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        }
        getDrinks();
    }, [setSearchTerm, searchTerm]);

    return (
        <main>
            <SearchForm setSearchTerm={setSearchTerm}></SearchForm>
            <CocktailList
                loading={loading}
                cocktails={cocktails}></CocktailList>
        </main>
    );
}
