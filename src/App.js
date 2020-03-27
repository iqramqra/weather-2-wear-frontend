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
    zipcode: 11230
  }

  handleTime(){
    const date = new Date();
    date.setDate(new Date().getDate() + 1)
    const tmmw = (date.toISOString().slice(0,10));
    return tmmw
  }
  
  componentDidMount(){
    fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${this.state.zipcode}&units=imperial&appid=${apiConfig.owaKey}`)
    .then(r => r.json())
    .then(weatherData => {
      const todayDate = new Date().toISOString().slice(0,10);
      // const dailyData = weatherData.list.filter((reading) => reading.dt_txt.includes(`${todayDate} 18:00:00` || `${this.handleTime()} 18:00:00`))
      const dailyData = weatherData.list.filter((reading) => reading.dt_txt.includes(`${this.handleTime()} 18:00:00` || `${todayDate} 18:00:00`))
      this.setState({
        allData: weatherData.city, 
        dailyData: dailyData
      })
    })
  }

  constructor(props) {
    super(props)
    this.handleZipcode = this.handleZipcode.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  handleZipcode(userZipcode){
    fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${userZipcode}&units=imperial&appid=${apiConfig.owaKey}`)
    .then(r => r.json())
    .then(weatherData => {
      const todayDate = new Date().toISOString().slice(0,10);
      // const dailyData = weatherData.list.filter((reading) => reading.dt_txt.includes(`${todayDate} 18:00:00` || `${this.handleTime()} 18:00:00`))
      const dailyData = weatherData.list.filter((reading) => reading.dt_txt.includes(`${todayDate} 18:00:00`))
        this.setState({
            allData: weatherData.city, 
            dailyData: dailyData
        })
    })
  }
  
  render() {
    console.log(this.state.dailyData);
    return (
      <div className="App">
        <ZipcodeForm handleZipcode={this.handleZipcode} state = {this.state.zipcode}/>
        <WeatherContainer weatherData={this.state.allData} dailyData={this.state.dailyData} />
        <OutfitContainer dailyData={this.state.dailyData}/>
      </div>
    )
  }
}

export default App;
