import React, { Component } from 'react'

class OutfitCard extends Component {
    
    render() {
        // console.log(this.props.dailyData);
        //stores Data into the var outfitData
        //   let outfitData = this.props.outfit;
          // console.log(outfitData[0]);

        //   let maxTempData = this.props.dailyData.map((reading) => {
        //     return reading.main.temp_max
        // })
        // console.log(maxTempData);
        //   let outfits = this.props.outfit.map(recs =>{
        //     // console.log(reading);
        //     if (Math.round(maxTempData)>= 80) {
        //         return ( `summer${recs[0]}`)
        //         // spring
        //     } else if (Math.round(maxTempData)<=66 && Math.round(maxTempData) >= 70){
        //         return (`Spring ${recs[1]}`)
        //         // fall
        //     } else if (Math.round(maxTempData) <= 55 && Math.round(maxTempData)>= 65){
        //         return (`fall ${recs[2]}`)
        //     } else {
        //         return (` winter${recs[3]}`)
        //     }
        //   })

        //   console.log(outfits);
          
            let outData = this.props.outfit.map(outfit => {
                return outfit
            })

            // console.log(outData);
            

          let data = this.props.dailyData.map(reading => {
              // console.log(reading);
            //   let outfitData = this.props.outfit
              // summer
              if (Math.round(reading.main.temp_max)>= 80) {
                  outData.map(x => {console.log(x);
                  })
                  return `Shirt: ${outData[0].top} Bottom:  ${outData[0].bottom}`
                  // spring
              } else if (Math.round(reading.main.temp_max)>= 70){
                  return `Shirt: ${outData[1].top} Bottom:  ${outData[1].bottom}`
                  // fall
              } else if (Math.round(reading.main.temp_max)>= 65){
                  return `Shirt: ${outData[2].top} Bottom:  ${outData[2].bottom}`
              } else {
                  return `Shirt: ${outData[3].top} Bottom:  ${outData[3].bottom}`
              }
          })

        return (
            <div>
                {data}
                {/* {outfits} */}
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


