import React from 'react';
import { bindActionCreators } from 'redux';
import { Actions } from './../reducer';

export default class AbstractSettingsComponent extends React.PureComponent {
  getActions(){
      const { dispatch }  = this.props;
      return bindActionCreators(Actions, dispatch);
    }

}
