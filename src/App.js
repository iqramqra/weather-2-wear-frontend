import React, { Component } from 'react'
import './App.css';
import WeatherContainer from './components/WeatherContainer'
import OutfitContainer from './components/OutfitContainer'
import ZipcodeForm from './components/ZipcodeForm'
import apiConfig from './apiKey'

class App extends Component {
  
  state={
    allData:[],
    dailyData: [],
    zipcode: 11218

    // 11218
    // 21228
    // 32789
  }

  handleTime(){
    // console.log("hi");
    const date = new Date();
    date.setDate(new Date().getDate() + 1)
    const tmmw = (date.toISOString().slice(0,10));
  }
  
  componentDidMount(){
    // baseUrl = ''
    fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${this.state.zipcode}&units=imperial&appid=${apiConfig.owaKey}`)
    .then(r => r.json())
    .then(weatherData => {
      const todayDate = new Date().toISOString().slice(0,10);
      const dailyData = weatherData.list.filter((reading) => reading.dt_txt.includes(`${todayDate} 18:00:00` || `${this.handleTime()} 18:00:00`))
        this.setState({
            allData: weatherData.city, 
            dailyData: dailyData
        })
    })
  }
  
  render() {
    // console.log(this.state.dailyData)
    console.log(this.handleTime());
    
    return (
      <div className="App">
        <ZipcodeForm />
        <WeatherContainer weatherData={this.state.allData} dailyData={this.state.dailyData} />
        <OutfitContainer dailyData={this.state.dailyData}/>
      </div>
    )
  }
}

export default App;
