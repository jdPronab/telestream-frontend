import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Dashboard.css'

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className='mil-small'>
        <div className='dashboard-header flex align-items-center space-between'>
          <div className='mbl-small'>
            <h1><span>Hello,</span>San Lee</h1>
            <p className='mbl-small'>Take a look at your statistics.</p>
          </div>
          <div className='mbl-small'>
            <p>All time</p>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard