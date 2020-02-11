import React, { Component } from 'react';
import axios from 'axios';
class Categorias extends Component {
 
  constructor(props) {
    super(props)
    axios
      .get('/teste')
      .then(result => {
        console.log(result)
      })
  } 

  state = {
    response: '',
    porta: '',
    post: '',
    responseToPost: '',
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express, porta: res.porta }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/categoria');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/resp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();

    this.setState({ responseToPost: body });
  };

  render() {
    return (
      <fieldset><legend><strong>REACT + NODE EXPRESS</strong></legend>
      <p>{this.state.response + this.state.porta}</p>
      <form onSubmit={this.handleSubmit}>
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
      <p>{this.state.responseToPost}</p>
    </fieldset>
    );
  }
}
export default Categorias;