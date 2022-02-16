import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import Input from "./components/Information/Input";
import ReportModal from "./components/Modal";
import ProfileCards from "./components/ProfileCards";

function App() {
  const user = true;

  // State for Reporting - Modal
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <Navigation />
      <Header />
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
        <Input placeholder={"Death is upon us :D"} />

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
        {/* Modal Button Press (JUST A TEST BUTTON) */}
        {/* <div className="Report">
        <button onClick={() => setShow(true)}>Report</button>
        <ReportModal title="Report" onClose={() => setShow(false)} show={show}>
          <p>Testing</p>
        </ReportModal>
      </div> */}

        {/* footer picture */}
      </div>
    </div>
  );
}

export default App;
