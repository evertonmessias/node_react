import React, { Component } from 'react';
import axios from 'axios';
class Categorias extends Component {

  state = {
    response: '',
    porta: '',
    post: '',
    respPost: '',
  };

  constructor(props) {
    super(props)
    axios
      .get('/categoria')
      .then(res => this.setState({ response: res.data.express, porta: res.data.porta }))
      .catch(err => console.log(err));
  }

  submeter = async e => {
    e.preventDefault();
    const resp = await fetch('/resp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await resp.text();
    this.setState({ respPost: body });
  };

  render() {
    return (
      <fieldset><legend><strong>REACT + NODE EXPRESS</strong></legend>
        <p>{this.state.response + this.state.porta}</p>
        <form onSubmit={this.submeter}>
          <p>
            <strong>Post para o Server:</strong>
          </p>
          <input
            type="text"
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.respPost}</p>
      </fieldset>
    );
  }
}
export default Categorias;