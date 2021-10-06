import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react"

const client = new ApolloClient({
  uri: 'https://scritch.es/graphql',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Router>
          <Switch>
            <Route path="/:idfursuit?/:idimage?">
              <App/>
            </Route>
          </Switch>
        </Router>
      </ChakraProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
