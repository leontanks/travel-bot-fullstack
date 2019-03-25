import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {getShoppings} from '../../store/actions/shopping'

class Shoppings extends Component {

    static propTypes = {
        getShoppings: PropTypes.func.isRequired,
        shoppings: PropTypes.array.isRequired
    }

    static defaultProps = {
        shoppings:[]
    }

    componentWillMount() {
        this.props.getShoppings();
    }

    render() {
        return (
            <div>
                <h2>Travel</h2>
                <ul>
                    {this.props.shoppings.map(shopping =>
                        <li key={shopping.id}>{shopping.brand}</li>
                    )}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    shoppings: state.shoppings
})

const dispatchToProps = (dispatch) => ({
    getShoppings: () => dispatch(getShoppings())
})

export default connect(mapStateToProps, dispatchToProps)(Shoppings);