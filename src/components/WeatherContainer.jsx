import React, { Component } from 'react'
import WeatherCard from './WeatherCard'

class WeatherContainer extends Component {
    render() {
        return (
            <div className='WeatherContainer'>
                <h1>In the Weather Container</h1>
                <WeatherCard/>
            </div>
        )
    }
}

export default WeatherContainer
