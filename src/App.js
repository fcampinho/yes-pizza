import React from 'react';
import {PizzaSizes} from './sizes/PizzaSizeList';
import {Cart} from './cart/Cart';

import './App.css';

const App = () => (
    <div className="main">
        <div>
            <PizzaSizes/>
            <Cart/>
        </div>
    </div>
);

export default App;