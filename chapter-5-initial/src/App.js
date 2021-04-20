import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Lists from './pages/Lists';
import ListDetail from './pages/ListDetail';
import ListForm from './pages/ListForm';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const AppWrapper = styled.div`
  text-align: center;
`;

const App = () => (
  <>
    <GlobalStyle />
    <AppWrapper>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
              <Lists />
          </Route>
          <Route path='/list/new'>
              <ListForm />
          </Route>
          <Route path='/list/:listId'>
              <ListDetail />
          </Route>
        </Switch>
      </Router>
    </AppWrapper>
  </>
);

export default App;
