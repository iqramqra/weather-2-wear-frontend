import React, { Component } from 'react'

class OutfitCard extends Component {
    
    render() {
        let outData = this.props.outfit.map(outfit => {
            return outfit
        })
        let data = this.props.dailyData.map(reading => {
            if (Math.round(reading.main.temp_max)>= 80) {
                return `It's pretty warm out today so you should wear a ${outData[0].top} and a pair of ${outData[0].bottom}`
                } else if (Math.round(reading.main.temp_max)>= 70){
                    return `It's a nice day out today so you should wear a ${outData[1].top} and a pair of ${outData[1].bottom}`
                } else if (Math.round(reading.main.temp_max)>= 60){
                    return `It's a chilly day out today so you should wear a ${outData[2].top} and a pair of ${outData[2].bottom}`
                } else {
                    return `It's a cold, cold day out today so you should wear a ${outData[3].top} and a pair of ${outData[3].bottom}`
                }
            })
        return (
            <div className='OutfitCard'>
                {data}
            </div>
        )
    }
}

export default OutfitCard