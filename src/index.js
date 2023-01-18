import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './header';
import MainBody from './mainBody';
import Login from './login';
import Timer from './timer';
import Pagination from './pagination';
import Badge from './badge';
import Social from './social';
import Form from './form';
import Footer from './footer';
//import About from './about';
import reportWebVitals from './reportWebVitals';
import { icon, InlineIcon } from '@iconify/react';
import shoppingOutline from '@iconify-icons/mdi/shopping-outline';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <Header /> */}
      {/* <MainBody /> */}
      {/* <Pagination /> */}
      {/* <Badge /> */}
      {/* <Social /> */}
      <Switch>
        {/* <Route path="/mainBody/:id">
          <MainBody />
        </Route>
        <Route path="/timer">
          <Timer />
        </Route>
        <Route path="/pagination">
          <Pagination />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/badge">
          <Badge />
        </Route>
        <Route path="/social">
          <Social />
        </Route>
        <Route path="/footer">
          <Footer />
        </Route>
        <Route path="/form">
          <Form />
        </Route> */}
        <Route path="/" exact={true}>
          <MainBody />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
      {/* <Footer /> */}
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
