import { PropTypes, PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { Actions } from './../reducer';

export default class AbstractSettingsComponent extends PureComponent {
  static proptypes = {
    dispatch: PropTypes.func.isRequired,
  	currentValue: PropTypes.string,
    operator: PropTypes.string,
    previousValue: PropTypes.number,
  }

  getActions = () => {
    const { dispatch }  = this.props;
    return bindActionCreators(Actions, dispatch);
  }

  updateCalculator = (key, value, pushIt) => {
    if (typeof key === 'string') key = [key]
    this.getActions().updateState({key, value, pushIt})
  }

  calculate = (operator, currentValue, previousValue) => {
    switch (operator) {
      case 'add': return previousValue + currentValue;
      case 'subtract': return previousValue - currentValue;
      case 'multiply': return previousValue * currentValue;
      case 'divide': return previousValue / currentValue
      default: return currentValue;
    }
  }

  enterNumber = (num) => {
    let { currentValue } = this.props;
    currentValue = currentValue === '0' ? num.toString() : `${currentValue}${num}`
    this.updateCalculator('currentValue', currentValue);
  }

  setOperator = (whichOperator) => {
    let { operator, previousValue, currentValue } = this.props;
    previousValue = operator ?
    this.calculate(operator, Number(currentValue), previousValue) : Number(currentValue)
    this.updateCalculator('currentValue', '0');
    this.updateCalculator('operator', whichOperator);
    this.updateCalculator('previousValue', previousValue);
  }

  percentage = () => {
    const { currentValue } = this.props;
    const percent =  (Number(currentValue) / 100).toString();
    this.updateCalculator('currentValue', percent);
  }

  clearDisplay = () => {
    this.updateCalculator('currentValue', '0');
    this.updateCalculator('operator', null);
    this.updateCalculator('previousValue', 0);
  }

  evaluate = () => {
    const { currentValue, previousValue, operator } = this.props;
    const equal = this.calculate(operator, Number(currentValue), previousValue).toString();
    this.updateCalculator('currentValue', equal);
    this.updateCalculator('operator', null);
    this.updateCalculator('previousValue', 0);
  }

  toggleNegative = () => {
    this.updateCalculator('currentValue', (Number(this.props.currentValue)).toString());
  }
}
