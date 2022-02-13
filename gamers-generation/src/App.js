import "./App.scss";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";

import React, { useState } from "react";
import ReportModal from "./components/Modal";

function App() {
  const user = true;

  // State for Reporting - Modal
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <Navigation />
      <Header />
      {user ? (
        <div className="sidebar__container">
          <Sidebar />
        </div>
      ) : null}
      {/* input */}

      {/* Modal Button Press (JUST A TEST BUTTON) */}
      {/* <div className="Report">
        <button onClick={() => setShow(true)}>Report</button>
        <ReportModal title="Report" onClose={() => setShow(false)} show={show}>
          <p>Testing</p>
        </ReportModal>
      </div> */}

      {/* footer picture */}
    </div>
  );
}

export default App;
