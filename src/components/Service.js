import React from 'react'

const Service = ({ ser }) => {
    return (
        <div className="services-column">
            <img className="img__1" src={ser.img} width="159px" height="126px" />
            <div className="column-title">{ser.service}</div>
            <div className="column-text">{ser.description}</div>
        </div>
    )
}

export default Service
