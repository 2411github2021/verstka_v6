import React from 'react'

const Skill = ({ skl }) => {
    return (
        <div className="skills-column">
            <img className="img__2" src={skl.img} width="160px" height="160px" />
            <div className="skills-col">{skl.skill}</div>
            <div className="skills-column-title">{skl.service}</div>
        </div>
    )
}

export default Skill
