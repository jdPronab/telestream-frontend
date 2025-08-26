import React from 'react'
import '../styles/StatCard.css'

const StatCard = ({stat, title, icon="src/assets/react.svg"}) => {
  return (
    <div className='statcard-container flex space-between align-items-center pbl-small pil-small'>
        <div>
            <div>
                {stat}
            </div>
            <div>
                {title}
            </div>
        </div>
        <div>
            <img src={icon} alt="" />
        </div>
    </div>
  )
}

export default StatCard