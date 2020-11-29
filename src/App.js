

import React, { Component } from 'react'
import ListBeer from './components/ListBeer';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      beers: []
    } 
  }

  componentDidMount = () => {
    fetch('https://api.punkapi.com/v2/beers')
      .then(response => response.json())
      .then(data => {
        let beers = data.map(beer => beer);
        this.setState({
          beers
        } )
      })
      
  }


 render() {
   return(
    <div>
        <header className="App-header">
        <li>
          <ListBeer beers={this.state.beers}/>
        </li>
          
        </header>
    </div>
   )
 }
}
   
export default App;
