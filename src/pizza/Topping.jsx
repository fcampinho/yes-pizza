import React from 'react';
import './Pizza.css';

export const Topping = ({topping, onToppingToggle}) => (
    <li className='Topping'>
        <input
            type="checkbox"
            checked={topping.selected}
            value={topping.name}
            onChange={onToppingToggle}/> {topping.name}
        - US$: {topping.price}
    </li>
);