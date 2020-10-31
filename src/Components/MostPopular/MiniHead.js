import React from 'react'
import './MostPopular.css'

function MiniHead(props) {
    return (
        <div className='minihead-div' style={props.headStyle}>
            <div>{props.heading}</div>
        </div>
    )
}

export default MiniHead
