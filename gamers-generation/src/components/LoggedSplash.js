import React from 'react'
import { Link } from 'react-router-dom';
import "./LoggedSplash.scss"

function LoggedSplash(props) {
  return (
    <div className="logged__splash">
      <div className="logged__title">
        Welcome, {props.gamer_tag}
      </div>
      <div className="logged__body">
        What would you like to do?
      </div>
      <div className="loggednav">
        <Link to="/swipe">
        <button className="logged-btn-match">Match</button>
        </Link>
        <Link to="/chat">
        <button className="logged-btn-chat">Chat</button>
        </Link>
      </div>
    </div>
  )
}

export default LoggedSplash;