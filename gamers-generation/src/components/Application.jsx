// Importing
import React, { useState } from 'react'
import ReportModal from './Modal'

const Application = function(props) {
  const [show, setShow] = useState(false)

  return (
    <div className="Report">
      <button onClick={() => setShow(true) }>Report</button>
      <ReportModal title="Report" onClose={() => setShow(false)} show={show}>
        <p>Testing</p>
      </ReportModal>
    </div>
  )
}

export default Application