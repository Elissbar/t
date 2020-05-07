import React from 'react';
import { connect } from 'react-redux'; //Соединяет store с компонентом, благодаря чему store можно использовать как props
import Counter from './Counter';
import './App.css';
import {add, sub, addNumber, asyncAdd} from './redux/reducers/action/action';

class App extends React.Component {
  render() {
    // console.log('State', this.props)
    return (
      <div className="App">
        <h1>Счетчик {this.props.counter}</h1>
        <hr />
        <div>
          <button onClick={this.props.onAdd}>Добавить 1</button>
          <button onClick={this.props.onSub}>Вычеслить 1</button>
        </div>
        <div>
          <button onClick={() => this.props.addNum(15)}>Добавить 15</button>
          <button onClick={() => this.props.addNum(-17)}>Вычеслить 17</button>
        </div>
        <button onClick={() => this.props.asyncAddNumber(100)}>Ассинхронное действие(+100)</button>
        <Counter />
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    counter: state.counter1.counter1
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch(add()),
    onSub: () => dispatch(sub()),
    addNum: number => dispatch(addNumber(number)),
    asyncAddNumber: number => dispatch(asyncAdd(number))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App); // Порядок функций обязателен
