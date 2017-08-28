import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';

export default class BaseLayout extends React.Component {
  render() {
    return (
      <div className='aim'>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
