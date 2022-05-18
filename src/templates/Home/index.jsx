import logo from '../../logo.svg';
import './style.css';
import { Component, useCallback, useEffect, useState } from 'react';
import { Posts } from '../../components/Posts';
import {loadPosts} from '../../utils/load-posts'
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export class Home extends Component{
  state={
    counter:0
  }
  handleClick=()=>{
    this.setState((prevState, prevProps)=>{
      console.log('Prevstate:', prevState.counter)
      console.log('PrevProps:', prevProps.numberToIncrement)
      return {counter:prevState.counter+prevProps.numberToIncrement}
    }, ()=>{
      console.log(this.state.counter)
    })
  }
  render(){
    return(
      <div className="container">
        <h1>State with class</h1>
        <p>Meu contador: {this.state.counter}</p>
        <button onClick={this.handleClick}>Incrementar</button>
      </div>
    )
  }
}

export default Home;
