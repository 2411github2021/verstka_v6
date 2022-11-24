import React from 'react'

const Project = ({ proj }) => {
    return (
        <div class="portfolio-column">
            <img class="img__3" src={proj.img} width="541px" height="311px" />
            <div class="portfolio-column-title">{proj.project}</div>
        </div>
    )
}

export default Project
