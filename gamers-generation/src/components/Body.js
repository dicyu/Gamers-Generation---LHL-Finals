import React from 'react'
import './Body.scss'

function Body() {
  return (
    <div className='container'>
      <div className='container__one'>
        <h2 className='container__header'>
          <div className='header__text'>1. Sign Up</div>
        </h2>
        <div className='inner-text'>It's easy. Just sign up for an account and you on your way to finding another like minded gamer!</div>
      </div>
      <div className='container__two'>
        <h2 className='container__header'>
        <div className='header__text'>2. Setup your profile!</div>
        </h2>
        <div className='inner-text'>You can be whatever you want to be. Want to upload a picture of Sasuke as your profile picture? By all means!</div>
      </div>
      <div className='container__three'>
        <h2 className='container__header'>
        <div className='header__text'>3. Match!</div>
        </h2>
        <div className='inner-text'>Get matched with like-minded players and chat with them in app, make some new friends!</div>
      </div>
    </div>
  )
}

export default Body;