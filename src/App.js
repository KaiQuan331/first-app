import React, { Component } from 'react';
import './App.css'
import axios from 'axios'
import test from './test'


class App extends Component {

  componentDidMount(){ //onPageLoad 
    console.log('component mounted!!!!!')

    axios.get(`https://dog.ceo/api/breeds/image/random`)
      .then(res => console.log(res))
}

  render() {
    return (
      <div class='nice'>
        Hello I am starting this. Testingggggg
      </div>
    );
  }
}

export default App;