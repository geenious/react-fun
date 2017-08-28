import React from 'react';

export default class ChildComponent extends React.Component {
  render() {
    return (
      <div>
        <div className='submitbutton'>
          <button className='submit' type="submit" onClick={this.props.onClick}>Send</button>
        </div>
      </div>
    );
  }
}
