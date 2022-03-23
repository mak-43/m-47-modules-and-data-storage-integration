import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import Shoes from '../shoes/Shoes';
import { add } from '../utilities/calculate';

const Cosmetics = () => {

    const [cosmetics, setCosmetics] = useState([]);


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, [])

    const first = 50;
    const second = 66;
    const total = add(first, second)


    return (
        <div>
            <h1>Welcome to my cosmetics store!!!!</h1>
            <h3>Total:{total}</h3>
            <Shoes></Shoes>
            {
                cosmetics.map(cosmetic => <Cosmetic
                    key={cosmetic.id}
                    cosmetic={cosmetic}
                ></Cosmetic>)
            }

        </div>
    );
};

export default Cosmetics;