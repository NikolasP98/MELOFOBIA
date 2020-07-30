/*jshint esversion :9*/
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar-component';
import Footer from './Components/Footer/footer-component';
import { MuiThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core';
import Editor from './Components/Editor/editor-component';
import Article from './Components/Article/article-component';
import Login from './Pages/Login/Login-page';
import SourceSansPro from './fonts/SourceSansPro-Regular.ttf';
import SourceSansProSemiBold from './fonts/SourceSansPro-SemiBold.ttf';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const sourceSansPro = {
  fontFamily: 'SourceSansPro',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('SourceSansPro'),
    local('SourceSansPro-Regular'),
    local('SourceSansPro-Bold'),
    url(${SourceSansPro}) format('ttf')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};



const theme = createMuiTheme({
  typography: {
    fontFamily: 'Source Sans Pro, sans-serif',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [sourceSansPro],
      },
    },
  },
  palette: {
   primary:{
       main:'#b71c1c'
   }
 },
});


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
            <Route path='/login' exact component={ Login } />
          </Switch>
          <Footer />
        </div>
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
