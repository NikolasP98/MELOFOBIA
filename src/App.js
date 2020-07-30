/*jshint esversion :9*/
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar-component';
import Footer from './Components/Footer/footer-component';
import { MuiThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core';
import Editor from './Components/Editor/editor-component';
import Article from './Components/Article/article-component';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const theme = createMuiTheme();
function App() {
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <div>
          <Navbar />
          <Switch>
            <Route path='/editor' exact component={ Editor } />
            <Route path='/article' exact component={ Article } />
            <Route path='/signup' exact component={ Signup } />
          </Switch>
          <Footer />
        </div>
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
