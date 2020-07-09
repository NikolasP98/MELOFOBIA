/*jshint esversion :9*/
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar-component';
import {MuiThemeProvider,createMuiTheme,CssBaseline} from '@material-ui/core';

const theme = createMuiTheme();
function App() {
  return (
    <MuiThemeProvider theme = {theme}>
    <CssBaseline/>
    <div>
      <Navbar/>
      <h1>Melofobia</h1>
    </div>
    </MuiThemeProvider>
  );
}

export default App;
