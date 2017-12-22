import React, { Component } from 'react';
import {orange400} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from './components/Login';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Switch, Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    const muiTheme = getMuiTheme({
      palette: {
        primary1Color: orange400,
      },
      appBar: {
        height: 48,
        backgroundColor: this.primary1Color,
        textAlign: "center",
      },
    });

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
      <Switch>
        <Route path="/" component={Login}/>
      </Switch>
      </MuiThemeProvider>
    );
  }
}

export default App;
