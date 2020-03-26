import React, { Component } from 'react'

class WeatherCard extends Component {
    render() {
        // console.log(this.props.weatherData);
        
        let {name} = this.props.weatherData
        let {temp, feels_like, humidity} = this.props.reading.main
        return (

            <div className='WeatherCard'>
            <h5>{name}</h5>
            <h1>{Math.round(temp)}°F</h1>
            <h5>Feels Like:</h5>
            <h4>{Math.round(feels_like)}°F</h4>
            <p>{humidity}% Humidity</p>
            
        </div>
        )
    }
}

export default WeatherCard


