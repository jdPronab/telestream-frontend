import React from 'react'
import '../styles/StatCard.css'

const StatCard = ({stat, title, icon="src/assets/react.svg"}) => {
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
            <img src={icon} alt="" />
        </div>
    </div>
  )
}

export default StatCard