import React from 'react';
import { bindActionCreators } from 'redux';
import { Actions } from './../reducer';

export default class AbstractSettingsComponent extends React.PureComponent {
  getActions = () => {
    const { dispatch }  = this.props;
    return bindActionCreators(Actions, dispatch);
  }

  updateCalculator = (key, value, pushIt) => {
    this.getActions().updateState({[...key], value, pushIt})
  }

  calculate( currentValue, previousValue, operator ) {
    switch (operator) {
  		case 'add':
  			return previousValue + currentValue;
  		case 'divide':
  			return previousValue / currentValue;
  		case 'multiply':
  			return previousValue * currentValue;
  		case 'subtract':
  			return previousValue - currentValue;
  		default: return currentValue;
    }
  }
