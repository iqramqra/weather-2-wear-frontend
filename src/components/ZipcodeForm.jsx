import React, { Component } from 'react'
import apiConfig from '../apiKey'

let zipCodeInput = 11230
class ZipcodeForm extends Component {
    
    state = {
        weeather: [],
        zipcode: 11230
    }
    
    
    componentDidMount(){
        fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${zipCodeInput}&units=imperial&appid=${apiConfig.owaKey}`)
        .then(r => r.json())
        .then()
    }

    handleChange = (e) => {
        this.props.handleZipCode(e.target.value)
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        // console.log(this.props);
        
        return (
                <form className='ZipCode' onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" name='zipcode' placeholder='Enter your Zipcode' value={this.props.zipcode} onChange={this.handleChange} />
                    </label>
                    <input type='submit' value='submit'/>
                </form>
        )
    }
}

export default ZipcodeForm

