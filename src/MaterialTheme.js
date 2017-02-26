import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from './App';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  fontFamily: 'Quattrocento, sans-serif',
  palette: {
    primary1Color: '#22b222',
    primary2Color: '#90e54b',
    primary3Color: '#283d3b',
    accent1Color: '#f9e52a',
    borderColor: '#283d3b',
    pickerHeaderColor: '#90e54b',
  },
  appBar: {
    height: 50,
  },
});

export default class MaterialTheme extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <App />
      </MuiThemeProvider>
    );
  }
}
