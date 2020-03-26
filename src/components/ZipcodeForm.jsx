import React from 'react';
// import apiConfig from '../apiKey'
// let zipCodeInput = 11230
class ZipcodeForm extends React.Component {

    handleChange = (e) => {
        
        console.log(e.target.value); 
    }

    handleSubmit = (e) => {
        e.preventDefault()
        var text = document.getElementById('zipcodeText').value;
        // this.props.zipCode
        this.props.handleZipcode(text)
        // this.props
    }

    render() {
        // console.log(this.state);
        return (
                <form className='ZipCode' onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" 
                            id='zipcodeText'
                            name='zipcode' 
                            placeholder='Enter your Zipcode' 
                            value={this.props.zipCode} 
                            onChange={this.handleChange} />
                    </label>
                    <input type='submit' value='submit' onClick={this.handleSubmit}/>
                </form>
        )
    }
}

export default ZipcodeForm

