import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import Input from "./components/Information/Input";
import ReportModal from "./components/Modal";
import ProfileCards from "./components/ProfileCards";

import GamesList from "./components/GamesList";
import EditProfile from "./components/EditProfile";

function App() {
  const user = true;
  const profile = false;
  const editProfile = true;

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
        {editProfile ? <EditProfile /> : null}
        {profile ? (
          <div className="cards_container">
            <ProfileCards />
            <ProfileCards />
          </div>
        ) : null}
        {/* <Input placeholder={"Death is upon us :D"} /> */}
        {/* Modal Button Press (JUST A TEST BUTTON) */}
        <div className="Report">
          <button onClick={() => setShow(true)}>Report</button>
          <ReportModal
            title="Report"
            onClose={() => setShow(false)}
            show={show}
          ></ReportModal>
        </div>
        footer picture
      </div>
    </div>
  );
}

export default App;
