import React, { Component } from 'react'
import OutfitCard from './OutfitCard'

class OutfitContainer extends Component {

    state = {
        outfit: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/outfits')
        .then(r => r.json())
        .then(outfitArray => {
            this.setState({
                outfit: outfitArray
            })
        })
    }

    render() {
        // console.log(this.state);
        



        return (
            <div className='OutfitContainer'>
                < OutfitCard outfit={this.state.outfit} dailyData={this.props.dailyData}/>
            </div>
        )
    }
}

export default OutfitContainer
