import React from 'react';
import { add, multiply } from '../utilities/calculate';

const Shoes = () => {
   const r= add(5,6)
    return (
        <div>
            <h2>This is shoes </h2>
            <h4>Total: {r} and mul : {multiply(11,3)}</h4>
        </div>
    );
};

export default Shoes;