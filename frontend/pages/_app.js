import React from 'react';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { initStore } from '../src/store/createStore';
import { fromJS } from 'immutable';
import Navbar from "../src/components/Navbar/Navbar";

class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props
    return <Container>
      <Provider store={store}>
        <div className="container">
          <Navbar/>
          <Component {...pageProps} />
        </div>
      </Provider>
    </Container>
  }
}

export default withRedux(initStore, {
  serializeState: state => state.toJS(),
  deserializeState: state => fromJS(state)
})(withReduxSaga({ async: true })(MyApp));
