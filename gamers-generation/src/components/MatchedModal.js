// Imports
import React from 'react'
import './MatchedModal.scss';
import { Link } from 'react-router-dom';


const MatchedModal = (props) => {
  // Render for modal
  return (
    <div className={`modal ${props.show ? 'show' : ''}`} onClick={props.onClose}>
      <div className='modal-content' onClick={e => e.stopPropagation()}>
        <div className='modal-header'>
          <h4 className='modal-title'>{props.title}</h4>
        </div>
        <div className='modal-body'>{props.children}
        </div>
        <div className='modal-footer'>
          <Link to="/login">
          <button onClick={props.onClose} className="btn-modal">Chat</button>
          </Link>
          <button onClick={props.onClose} className='btn-modal'>Close</button>
        </div>
      </div>
    </div>
  )
}

export default MatchedModal;