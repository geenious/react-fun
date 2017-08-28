import React from 'react';

export default class DisplayComponent extends React.Component {
  render() {
    return (
      <div className='display'>
        <h3>Your Message</h3>
        <div className='response'>
          {this.props.sayWhat}
        </div>
      </div>
    );
  }
}
