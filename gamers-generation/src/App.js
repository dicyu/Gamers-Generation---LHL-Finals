import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import ReportModal from "./components/Modal";
import ProfileCards from "./components/ProfileCards";
import UserEditForm from "./components/UserEditForm";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const user = false;

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
          </div>
        ) : null}
        {/* input */}
        <Register />
        {/* <UserEditForm /> */}
      </div>
    </div>
  );
}

export default App;
