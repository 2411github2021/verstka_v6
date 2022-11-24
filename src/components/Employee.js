import React from 'react'

const Employee = ({ emp }) => {
    return (
        <div className="teem-column">
            <img className="img__10" src={emp.img} width="200px" height="200px" />
            <div className="teem-column-title">{emp.name}</div>
            <div className="teem-column-subtitle">{emp.position}</div>
            <div className="teem-column-text">{emp.description}</div>
            <div className="teem-icon">
                <img className="img__2" src={emp.icon.facebook} width="32px" height="32px" />
                <img className="img__2" src={emp.icon.instagram} width="37px" height="37px" />
                <img className="img__2" src={emp.icon.twitter} width="32px" height="32px" />
                <img className="img__2" src={emp.icon.viber} width="32px" height="32px" />
            </div>
        </div>
    )
}

export default Employee
