import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { configureStore } from './store/configureStore';
import AppRoutes from './routes';
import Navbar from "./components/Navbar/Navbar";

const App =
  <Provider store={configureStore()}>
      <div className="container">
          <Navbar/>
          <Router>
            <AppRoutes />
          </Router>
      </div>
  </Provider>;

export default App;
