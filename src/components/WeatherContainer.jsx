import React, { Component } from 'react'
import WeatherCard from './WeatherCard'
// import apiConfig from '../apiKey.js'

class WeatherContainer extends Component {
    
    render() {
        // console.log(this.props.dailyData);

        let renderData = this.props.dailyData.map((reading, index) => {
            return <WeatherCard reading = {reading} key={index} weatherData={this.props.weatherData}/>
        })
        
        // console.log( this.props.weatherData );
        
        return (
            <div className='WeatherContainer'>
               {renderData}
            </div>
        )
    }
}
export default WeatherContainer
