import React, { Component } from 'react';

class BandInput extends Component {
  constructor(){
    super();
    this.state = {
      text: ''
    }
  }

  handleChange(ev){
    this.setState({
      text: ev.target.value
    })
  }

  handleSubmit(ev){
    ev.preventDefault();
    this.props.store.dispatch({type: 'ADD_BAND', band: this.state.text})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input onChange={this.handleChange.bind(this)}/>
        </form>
      </div>
    );
  }
};

export default BandInput;
