import React, { Component } from 'react'

class OutfitCard extends Component {
    
    render() {
        // console.log(this.props.dailyData);
        let data = this.props.dailyData.map(reading => {
            // console.log(reading.main.temp);
            // summer
            if (Math.round(reading.main.temp_max)>= 80) {
                return "Wear a light T-shirt"
                // temp is less than or equal to 100 and greater than or equal to 55
                // spring
            } else if (Math.round(reading.main.temp_max)>= 70){
                return 'Its spring wear something appropriate'
                // fall
            } else if (Math.round(reading.main.temp_max)>= 65){
                return 'Its Fall'
            } else {
                return 'Wear something heavy'
            }

        })
        
        return (
            <div>
                {data}
            </div>
        )
    }
}

export default OutfitCard

// Winter
// 45 highest lowest 26

// Fall
// 75 highest lowest 75

// Spring
//  76 highest lowest 54


// if lowestTemp is < 41 && highest Temp is > 50
// return first array [0]

// 


