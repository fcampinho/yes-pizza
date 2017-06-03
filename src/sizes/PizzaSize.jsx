import React from 'react';
import './PizzaSize.css';

export const PizzaSize = ({
    onClick,
    name
}) => (
    <button className='PizzaSize' onClick={onClick}>
        Add Pizza {name}
    </button>
);