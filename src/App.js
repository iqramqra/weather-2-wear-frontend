import React, { Component } from 'react'
import './App.css';
import WeatherContainer from './components/WeatherContainer'
import OutfitContainer from './components/OutfitContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherContainer/>
        <OutfitContainer/>
      </div>
    )
  }
}

export default App;
