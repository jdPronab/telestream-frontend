import React from 'react'
import '../styles/StatCard.css'

const StatCardButton = ({stat, title, buttonName, onClick}) => {
  return (
    <div className='statcard-container flex space-between align-items-center pbl-small pil-small'>
        <div>
            <div>
                <p className='statcard-stat'>{stat}</p>
            </div>
            <div>
                <p className='statcard-title'>{title}</p>
            </div>
        </div>
        <div>
            <button onClick={() => onClick()}>{buttonName}</button>
        </div>
    </div>
  )
}

export default StatCardButton