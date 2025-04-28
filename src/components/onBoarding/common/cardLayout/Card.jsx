import React from 'react'
import './Card.css'

const Card = ({title, excerpt, children}) => {
    return(
        <div className="card">
            <h2 className='page-title'>
                {title}
            </h2>
            <p className="excerpt">{excerpt}</p>
            {children}
        </div>
    )
}

export default Card