import React from 'react';
import { connect } from 'react-redux';
import {add2} from './redux/reducers/action/action';


class Counter extends React.Component {
    render() {
        // console.log('State', this.props)
        return (
            <div style={{ padding: 20, border: '1px solid black' }}>
                <h1>Counter {this.props.counter}</h1>
                <hr />
                <button onClick={() => this.props.addNumber(1)}>ADD</button>
                <button onClick={() => this.props.addNumber(-1)}>SUB</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter2.counter2
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addNumber: number => dispatch(add2(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)