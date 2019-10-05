import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import '../library_blocks/main.css';
import '../components/main.css';
import withReduxStore from '../utils/with_redux';

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Provider store={reduxStore}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);
