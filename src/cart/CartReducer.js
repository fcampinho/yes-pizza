import {pizza} from '../pizza/PizzaReducer';

export const pizzaCart = (state = {
    pizzas: [],
    totalCart: 0.0
}, action) => {
    switch (action.type) {
        case 'ADD_PIZZA':
            let newPizza = pizza(undefined, action);
            return {
                pizzas: [
                    ...state.pizzas,
                    newPizza
                ],
                totalCart: state.totalCart + newPizza.totalPrice
            };
        case 'REMOVE_PIZZA':
            let index = state
                .pizzas
                .indexOf(action.pizza);
            if (index > -1) {
                return {
                    totalCart: state.totalCart - action.pizza.totalPrice,
                    pizzas: [
                        ...state
                            .pizzas
                            .slice(0, index),
                        ...state
                            .pizzas
                            .slice(index + 1)
                    ]
                }
            }

            return state;
        case 'TOGGLE_TOPPING':
            let acumPrice = 0.0;
            return {
                pizzas: state
                    .pizzas
                    .map(p => {
                        let newPizza = pizza(p, action);
                        acumPrice += newPizza.totalPrice;
                        return newPizza;
                    }),
                totalCart: acumPrice
            }
        default:
            return state;
    }
};