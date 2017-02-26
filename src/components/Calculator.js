import React, { Component } from "react";
import { connect } from "react-redux";
import AbstractSettingsComponent from "./AbstractSettingsComponent";
import CalculatorButton from "./CalculatorButton";
import Display from "./Display";

class Calculator extends AbstractSettingsComponent {

  enterNumber = (number) => {
    let { currentValue } = this.props;
    this.updateCalculator('currentValue', number)
  }

	render() {
		const { currentValue, operator, previousValue } = this.props;
		const numberButtons = [ 7, 8, 9, 4, 5, 6, 1, 2, 3, 0 ].map((number) => (
			<CalculatorButton
				callback={() => this.enterNumber(number)}
				key={number}
				value={number}
				wide={number === 0}
			/>
		));
    const calcButton = (cb, value, background, color) {
      <CalculatorButton
        callback={cb}
        value={value}
        backgroundColor={background || ''}
        color={color || ''}
      />
    };
    const backgroundLeft = '#d6d6d6';
    const backgroundOperator = '#f5923e';
		return (
			<main className="calculator">
				<Display value={currentValue} />
				<div className="calculator__buttons-wrapper">
					<section className="calculator__left-buttons">
            {calcButton(clear, 'AC', backgroundLeft )}
            {calcButton(toggleNegative, '+/-', backgroundLeft )}
            {calcButton(percentage, '%', backgroundLeft )}
						{numberButtons}
            {calcButton(() => enterNumber("."), '.')}
					</section>
					<section className="calculator__operator-buttons">
            {calcButton(() => setOperator(operators.DIVIDE), '%', backgroundOperator, 'fff')}
            {calcButton(() => setOperator(operators.MULTIPLY), 'x', backgroundOperator, 'fff')}
            {calcButton(() => setOperator(operators.SUBTRACT), '-', backgroundOperator, 'fff')}
            {calcButton(() => setOperator(operators.ADD), '+', backgroundOperator, 'fff')}
            {calcButton(evaluate, '=', backgroundOperator, 'fff')}
					</section>
				</div>
			</main>
		);
	}
}

const mapStateToProps = (state) => ({
  currentValue: state.get('currentValue'),
  operator: state.get('operator'),
  previousValue: state.get('previousValue'),
})

export default connect(mapStateToProps)(Calculator)
