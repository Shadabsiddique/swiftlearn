import React from "react";


const HeadingPair = ({ className, heading, subHeading }) => {
    return (
        <div className={className}>
            <h1>{heading}</h1>
            <p>{subHeading}</p>
        </div>
    )
}

export default HeadingPair;