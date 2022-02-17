import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import ReportModal from "./components/Modal";
import ProfileCards from "./components/ProfileCards";

function App() {
  const user = false;

  // State for Reporting - Modal
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <Navigation />
      <Header
        message="Welcome to
      Gaming Generation"
      />
      <div className="main__container">
        {user ? (
          <div className="sidebar__container">
            <Sidebar />
          </div>
        ) : null}
        {/* input */}
        <div className="cards_container">
          <ProfileCards />
          <ProfileCards />
        </div>
        {/* Modal Button Press (JUST A TEST BUTTON) */}
        <div className="Report">
          <button onClick={() => setShow(true)}>Report</button>
          <ReportModal
            title="Report"
            onClose={() => setShow(false)}
            show={show}
          >
            <p>Testing</p>
          </ReportModal>
        </div>
        footer picture
      </div>
    </div>
  );
}

export default App;
