import React, { useEffect } from 'react'
import './Modal.css';


const ReportModal = props => {
  if (!props.show) {
    return null
  }
  return (
    <div className='modal' onClick={props.onClose}>
      <div className='modal-content' onClick={e => e.stopPropagation()}>
        <div className='modal-header'>
          <h4 className='modal-title'>Report</h4>
        </div>
        <div className='modal-body'>
          Content
        </div>
        <div className='modal-footer'>
          <button onClick={props.onClose} className='button'>Close</button>
        </div>
      </div>
    </div>
  )
}

export default ReportModal