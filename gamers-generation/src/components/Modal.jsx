import React from 'react'
import './Modal.css';


const ReportModal = props => {
  if (!props.show) {
    return null
  }
  return (
    <div className='modal'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h4 className='modal-title'>Report</h4>
        </div>
        <div className='modal-body'>
          Content
        </div>
        <div className='modal-footer'>
          <button className='button'>Close</button>
        </div>
      </div>
    </div>
  )
}

export default ReportModal