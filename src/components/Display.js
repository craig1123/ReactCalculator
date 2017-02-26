import React from 'react';

export default class Display extends React.PureComponent {
  render() {
    const { value } = this.props;
    return (
  		<div className="display">
  			<div className="display__window-button-wrapper">
  				<div className="display__window-button" />
  				<div className="display__window-button" />
  				<div className="display__window-button" />
  			</div>
  			{ value }
  		</div>
    );
  }
}
