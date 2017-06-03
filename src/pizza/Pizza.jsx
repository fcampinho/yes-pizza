import React from 'react';
import {Topping} from './Topping';

import './Pizza.css';

export const Pizza = ({pizza, onRemoveClick, onToppingToggle}) => (
    <li key={pizza.id} className='Pizza'>
        {pizza.name}{' '}
        - Base Price ( {pizza
            .basePrice
            .toFixed(2)}
        ) - Total Price ( {pizza
            .totalPrice
            .toFixed(2)}
        ) - Max Toppings ( {pizza.maxToppings}
        )
        <button className='PizzaRemove' onClick={onRemoveClick}>
            Remove Pizza
        </button>
        <ul>
            {pizza
                .toppings
                .map(topping => <Topping key={topping.id}
                    topping={topping}
                    onToppingToggle={() => onToppingToggle(pizza.id, topping.id)}/>)}
        </ul>
    </li>
);