import React, { PropTypes, Component } from "react";

export default class CalculatorButton extends Component {
  static proptypes = {
    backgroundColor: PropTypes.string,
    callback: PropTypes.func,
    color: PropTypes.string,
    wide: PropTypes.bool,
  }
  static defaultProps = {
    backgroundColor: "#e0e0e0",
    color: '#000',
    wide: false,
  }

  render () {
    const { backgroundColor, callback, color, value, wide, style } = this.props;
    return (
      <button
        onClick={callback}
        className={`calculator-button${wide ? " calculator-button--wide" : ""}`}
        style={{ backgroundColor, color, ...style }}
      >
        {value}
      </button>
    );
  }
}
