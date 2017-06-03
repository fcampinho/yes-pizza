import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from "redux-thunk";
import promise from 'redux-promise';
import {createLogger} from 'redux-logger';

import {pizzaCart} from './cart/CartReducer';
import {pizzaSizes} from './sizes/PizzaSizeReducer';

export const configureStore = () => {
  const middlewares = [promise];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  const pizzaApp = combineReducers({pizzaCart, pizzaSizes});
  return createStore(pizzaApp, applyMiddleware(...middlewares));
};