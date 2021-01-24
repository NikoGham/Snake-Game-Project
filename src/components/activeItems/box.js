import React from 'react'
import PropTypes from 'prop-types'

const Box = ({top, bottom, left, right}) => {

    const style = {
        left: `${left}px`, 
        top: `${top}px`, 
        bottom: `${bottom}px`, 
        right: `${right}px`, 
        
    }

    console.log(style)

    return (
        <div style={style} className="bg-success" id="box">
            
        </div>
    )
}

Box.propTypes = {
    top: PropTypes.number.isRequired,
    bottom: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    right: PropTypes.number.isRequired,
}

export default Box
