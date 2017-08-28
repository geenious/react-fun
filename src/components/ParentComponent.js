import React from 'react';
import ChildComponent from './ChildComponent.js';
import DisplayComponent from './DisplayComponent.js';

export default class ParentComponent extends React.Component {
  constructor(props){
    super(props);

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      whatToSay: "",
      whatWasSaid: ""
    }
  }
  handleInput(e) {
    e.preventDefault();
    this.setState({whatToSay: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({whatToSay: this.state.whatToSay, whatWasSaid: this.state.whatToSay});
    this.setState({whatToSay: ""});
  }
  render() {
    return (
      <div className='body'>
        <DisplayComponent sayWhat={this.state.whatWasSaid} />
        <div>
          <input className='message' onChange={this.handleInput} type="text" placeholder="Say It, Don't Spray It!" value={this.state.whatToSay} />
        </div>
        <div>
          <ChildComponent onClick={(e) => this.handleSubmit(e)}/>
        </div>
      </div>
    );
  }
}
