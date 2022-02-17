import React from 'react'

import './Profile.scss'

function Profile(props) {

  const testData = ['Ren', 'bybang', 'pro.di.gy'];

  return (
    <div className='bio'>

      <div className='bio__bio'>
        Testing
      </div>
      <div className='bio__container'>
        <div className='bio__recent-box'>
          Recent Gamers <span class='bio__inner-text'>Played With</span>
        </div>
          {testData.map(gamer => (
          <div className='gamers-container'>
            <div className='gamers-name'>
              <span className='profile-pic'>
                Picture
              </span>
              {gamer}
            </div>
          </div>
        ))}
        
      </div>
      
        <div className='skill-container'>
          Testing
        </div>
    </div>

  )
}

export default Profile;