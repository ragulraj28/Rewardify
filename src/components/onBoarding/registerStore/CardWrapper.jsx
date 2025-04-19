import React from 'react'

const CardWrapper = ({title, excerpt, children}) => {
  return (
    <div className='card-wrapper'>
        {
            (title || excerpt) && 
            <div className="card-header">
                {title && <h2 className="card-title">{title}</h2>}
                {excerpt && <div className="card-excerpt">{excerpt}</div>}
            </div>
        }
        {children}
    </div>
  )
}

export default CardWrapper