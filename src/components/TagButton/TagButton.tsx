import React, { Fragment } from 'react'

const TagButton = ({color, text}) => {


    return (
        <Fragment>
            <button className="colored_button" style={{background: color}}>{text}</button>
        </Fragment>
    )
}

export default TagButton;