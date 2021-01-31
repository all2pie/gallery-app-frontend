import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import './App.scss';
import { Images } from './pages/Images/Images';
import { ImageFrom } from './pages/Image-Form/Image-From';

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path='/' component={Images}></Route>
        <Route exact path='/image/add' component={ImageFrom}></Route>
      </Switch>
    </Router>
  );
}

export default App;
