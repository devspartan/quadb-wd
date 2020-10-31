import React from 'react'
import './MiniNews.css'


function MiniNewsCard(props) {
    return (
        <div className='mini-news-card' style={props.MiniNewsCardStyle}>
            <a><img src={props.img}></img></a>
            <a>{props.headline}</a>
        </div>
    )
}

export default MiniNewsCard