import React from 'react'

function Headings(props) {
    return (
        <h4 className="f-bold padding-left padding-right" style={{color: props.textColor}}>{props.title}</h4>
    )
}

export default Headings
