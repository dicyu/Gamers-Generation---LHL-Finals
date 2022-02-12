// Imports
import React, { useEffect } from 'react'
import './Modal.css';


const ReportModal = props => {

  // Function for Esc key use to close
  const closeWhenEscapeKey = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose()
    }
  }

  // Clean up for esc key
  useEffect(() => {
    document.body.addEventListener('keydown', closeWhenEscapeKey)
    return function cleanUp() {
      document.body.removeEventListener('keydown', closeWhenEscapeKey)
    }
  }, [])

  // Render for modal
  return (
    <div className={`modal ${props.show ? 'show' : ''}`} onClick={props.onClose}>
      <div className='modal-content' onClick={e => e.stopPropagation()}>
        <div className='modal-header'>
          <h4 className='modal-title'>{props.title}</h4>
        </div>
        <div className='modal-body'>{props.children}</div>
        <div className='modal-footer'>
          <button onClick={props.onClose} className='button'>Close</button>
        </div>
      </div>
    </div>
  )
}

export default ReportModal