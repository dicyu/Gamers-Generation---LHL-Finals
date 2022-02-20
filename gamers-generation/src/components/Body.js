import React from 'react'
import './Body.scss'

function Body(props) {
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
        <div className='inner-text'>It's easy. Just sign up for an account and you on your way to finding another like minded gamer!</div>
      </div>
      <div className='container__three'>
        <h2 className='container__header'>
        <div className='header__text'>Match!</div>
        </h2>
        <div className='inner-text'>It's easy. Just sign up for an account and you on your way to finding another like minded gamer!</div>
      </div>
    </div>
  )
}

export default Body;