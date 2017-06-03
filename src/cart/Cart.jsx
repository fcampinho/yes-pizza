import React from 'react';
import {connect} from 'react-redux';
import {Pizza} from '../pizza/Pizza';
import {removePizza} from './CartActions';
import {toggleTopping} from '../pizza/PizzaActions';

const mapStateToCartProps = (state) => {
    return {pizzaCart: state.pizzaCart};
};

const mapDispatchToCartProps = (dispatch) => {
    return {
        onRemoveClick: (pizza) => {
            dispatch(removePizza(pizza));
        },
        onToppingToggle: (id, toppingId) => {
            dispatch(toggleTopping(id, toppingId));
        }
    }
};

const CartList = ({pizzaCart, onRemoveClick, onToppingToggle}) => (
    <div>
        <ul>
            {pizzaCart
                .pizzas
                .map(pizza => <Pizza
                    key={pizza.id}
                    pizza={pizza}
                    onRemoveClick={() => onRemoveClick(pizza)}
                    onToppingToggle={(id, toppingId) => onToppingToggle(id, toppingId)}/>)}
        </ul>

        Total Value: $ {pizzaCart
            .totalCart
            .toFixed(2)}
    </div>
);

export const Cart = connect(mapStateToCartProps, mapDispatchToCartProps)(CartList)