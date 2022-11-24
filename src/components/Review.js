import React from 'react'

const Review = ({ rev }) => {
    return (
        <div className="about-column">
            <div className="about-foto"><img className="img__3" src={rev.img} width="96px" height="96px" />
            </div>
            <div className="about-info">
                <div className="about-column-text">{rev.review}</div>
                <div className="about-column-name">{rev.name}</div>
                <div className="about-column-position">{rev.position}</div>
            </div>
        </div>
    )
}

export default Review
