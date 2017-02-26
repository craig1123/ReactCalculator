import React from "react";
import { connect } from "react-redux";
import AbstractSettingsComponent from "./AbstractSettingsComponent";
import CalculatorButton from "./CalculatorButton";
import Display from "./Display";

class Calculator extends AbstractSettingsComponent {

	render() {
		const { currentValue } = this.props;
		const numberButtons = [ 7, 8, 9, 4, 5, 6, 1, 2, 3, 0 ].map((number) =>
			<CalculatorButton
				callback={() => this.enterNumber(number)}
				key={number}
				value={number}
				wide={number === 0}
			/>
		);
    const calcButton = (cb, value, background, color) => (
      <CalculatorButton
        callback={cb}
        value={value}
        backgroundColor={background || ''}
        color={color || ''}
      />
    );
    const leftButtonBackground = '#d6d6d6'
    const operatorButtons = '#f5923e';
		return (
			<main className="calculator">
				<Display value={currentValue} />
				<div className="calculator__buttons-wrapper">
					<section className="calculator__left-buttons">
            {calcButton(this.clearDisplay, 'AC', leftButtonBackground)}
            {calcButton(this.toggleNegative, '+/-', leftButtonBackground)}
            {calcButton(this.percentage, '%', leftButtonBackground)}
						{numberButtons}
            {calcButton(() => this.enterNumber("."), '.')}
					</section>
					<section className="calculator__operator-buttons">
            {calcButton(this.setOperator.bind(this, 'divide'), '÷', operatorButtons, '#fff')}
            {calcButton(this.setOperator.bind(this, 'multiply'), 'x', operatorButtons, '#fff')}
            {calcButton(this.setOperator.bind(this, 'subtract'), '-', operatorButtons, '#fff')}
            {calcButton(this.setOperator.bind(this, 'add'), '+', operatorButtons, '#fff')}
            {calcButton(this.evaluate, '=', operatorButtons, '#fff')}
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
