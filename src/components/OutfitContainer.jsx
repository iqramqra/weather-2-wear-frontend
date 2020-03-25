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
        
        
        let renderOutfit = this.state.outfit.map(outfit => {
            return <OutfitCard key={outfit.id} outfit={outfit} dailyData={this.props.dailyData}/>
        })

        return (
            <div className='OutfitContainer'>
                {renderOutfit}
            </div>
        )
    }
}

export default OutfitContainer
