const uuidV4 = require('uuid/v4');

let toppingSelecteds = 0;
let totalPrice = 0.0;

const extractToppings = (toppings) => {
    return toppings.map(toppingTop => {
        if (toppingTop.defaultSelected) {
            toppingSelecteds++;
            totalPrice += toppingTop.topping.price;
        }
        return {id: uuidV4(), selected: toppingTop.defaultSelected, name: toppingTop.topping.name, price: toppingTop.topping.price};
    })
};

export const pizza = (state, action) => {
    switch (action.type) {
        case 'ADD_PIZZA':
            toppingSelecteds = 0;
            totalPrice = action.basePrice;

            return {
                id: uuidV4(),
                name: action.name,
                size: action.size,
                toppings: extractToppings(action.toppings),
                maxToppings: action.maxToppings,
                basePrice: action.basePrice,
                totalPrice: totalPrice,
                toppingSelecteds: toppingSelecteds
            };
        case 'TOGGLE_TOPPING':
            if (state.id !== action.id) {
                return state;
            }

            totalPrice = state.totalPrice;
            toppingSelecteds = state.toppingSelecteds;

            let nextToppings = state
                .toppings
                .map(topping => {
                    if (topping.id !== action.toppingId) {
                        return topping;
                    }

                    if (!state.maxToppings || toppingSelecteds < state.maxToppings || topping.selected) {
                        let newTopping = {
                            ...topping,
                            selected: !topping.selected
                        };
                        if (newTopping.selected) {
                            toppingSelecteds++;
                            totalPrice += topping.price;
                        } else {
                            toppingSelecteds--;
                            totalPrice -= topping.price;
                        }

                        return newTopping;
                    }

                    return topping;
                });

            return {
                ...state,
                totalPrice: totalPrice,
                toppings: nextToppings,
                toppingSelecteds: toppingSelecteds
            }
        default:
            return state;
    }
};