require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Head from './client/head.js';





class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
          <Head />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
