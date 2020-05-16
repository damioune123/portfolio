import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import './sass/main.scss';
import Footer from "./components/Footer/Footer";
class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="container">
            <Navbar/>
            <Switch>
              <Route exact path="/" component={HomePage}/>
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
    );
  }
}
export default App;
