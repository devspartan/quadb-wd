import React from 'react'
import './MiniNews.css'


function MiniNewsCard(props) {
    return (
        <div className='mini-news-card' style={props.MiniNewsCardStyle}>
            <a href='/#'><img src={props.img} alt={props.headline}></img></a>
            <a href='/#'>{props.headline}</a>
        </div>
    )
}

export default MiniNewsCard