import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import logo from '../logo.svg';
import Categorias  from './Categorias';
import Posts from './Posts';
import Home from './Home';

class HeaderBlog extends Component {
  render() {
    return (
      <div className="site">        
        <BrowserRouter>
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav className="menu"> 
        <Link to='/home' className="btn"> Home </Link>
        <Link to='/categorias' className="btn"> Categorias </Link>
        <Link to='/posts' className="btn"> Posts </Link>
        </nav>
        </header>
        <main className="main">
        <Switch>
          <Route path='/home' component={ Home } />
          <Route path='/categorias' component={ Categorias } />
          <Route path='/posts' component={ Posts } />
        </Switch>
        </main>
        </BrowserRouter>
      </div>
    );
  }
}
export default HeaderBlog;