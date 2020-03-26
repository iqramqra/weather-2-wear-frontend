import React, { Component } from 'react'
import WeatherCard from './WeatherCard'

class WeatherContainer extends Component {
    
    render() {
        let renderData = this.props.dailyData.map((reading, index) => {
            return <WeatherCard reading = {reading} key={index} weatherData={this.props.weatherData}/>
        })
        return (
            <div className='WeatherContainer'>
               {renderData}
            </div>
        )
    }
}
export default WeatherContainer
