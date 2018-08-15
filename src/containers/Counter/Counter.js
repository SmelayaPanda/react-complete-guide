import React, {Component} from 'react';
import {connect} from 'react-redux'
import {increment, decrement, add, subtract, storeResult, deleteResult} from '../../store/actions/actions'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

  counterChangedHandler = (action, value) => {
    switch (action) {
    case 'inc':
      this.setState((prevState) => {
        return {counter: prevState.counter + 1}
      })
      break;
    case 'dec':
      this.setState((prevState) => {
        return {counter: prevState.counter - 1}
      })
      break;
    case 'add':
      this.setState((prevState) => {
        return {counter: prevState.counter + value}
      })
      break;
    case 'sub':
      this.setState((prevState) => {
        return {counter: prevState.counter - value}
      })
      break;
    }
  }

  render() {
    return (
      <div>
        <CounterOutput value={this.props.counter}/>
        <CounterControl label="Increment" clicked={this.props.onIncrementCounter}/>
        <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}/>
        <CounterControl label="Add 5" clicked={() => this.props.onAddCounter(5)}/>
        <CounterControl label="Subtract 5" clicked={() => this.props.onSubtractCounter(5)}/>
        <hr/>
        <button onClick={() => this.props.onStoreResult(this.props.counter)}>Store result</button>
        <ul>
          {this.props.results.map(result => (
            <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>
              {result.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.ctr.counter,
  results: state.res.results
})

const mapDispatchToProps = dispatch => ({
  onIncrementCounter: () => dispatch(increment()),
  onDecrementCounter: () => dispatch(decrement()),
  onAddCounter: (payload) => dispatch(add(payload)),
  onSubtractCounter: (payload) => dispatch(subtract(payload)),
  onStoreResult: (payload) => dispatch(storeResult(payload)),
  onDeleteResult: (payload) => dispatch(deleteResult(payload))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);