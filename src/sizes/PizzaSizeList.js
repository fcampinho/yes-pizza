import React, {Component} from 'react';
import {connect} from 'react-redux';
import {PizzaSize} from './PizzaSize';
import {addPizzaSize, getGraph, receivePizzaSizes} from './PizzaSizeActions';
//import {getGraph} from '../Api'

const mapStateToSizesProps = (state) => {
    return {pizzaSizes: state.pizzaSizes};
};

const mapDispatchToSizesProps = (dispatch) => {
    return {
        onPizzaSizeClick: (size) => {
            dispatch(addPizzaSize(size))
        },
        receivePizzaSizes: (response) => { 
            dispatch(receivePizzaSizes(response))
        }
    }
};

export const PizzaSizesList = ({pizzaSizes, onPizzaSizeClick}) => (
    <div>
        {pizzaSizes.map(size => <PizzaSize
            key={size.name}
            name={size.name}
            onClick={() => onPizzaSizeClick(size)}/>)
        }
    </div>
);

export class PizzaSizes extends Component {
    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        const {receivePizzaSizes} = this.props;
        getGraph(receivePizzaSizes);
    }

    render() {
        const {
            onPizzaSizeClick,
            ...rest
        } = this.props;
        return <PizzaSizesList {...rest} onPizzaSizeClick={onPizzaSizeClick}/>
    }
}

PizzaSizes = connect(mapStateToSizesProps, mapDispatchToSizesProps)(PizzaSizes)