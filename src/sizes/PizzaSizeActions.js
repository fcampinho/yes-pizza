import * as api from '../Api';

export const addPizzaSize = (size) => ({
    type: 'ADD_PIZZA',
    ...size
});

export const receivePizzaSizes = (response) => ({
    type: 'RECEIVE_SIZES', 
    response
});

export const getGraph = (receivePizzaSizes) => api.getGraph("{pizzaSizes {name maxToppings basePrice toppings {defaultSelected topping {name " +
        "price}}}}").then(response => {
            receivePizzaSizes(response);
        });