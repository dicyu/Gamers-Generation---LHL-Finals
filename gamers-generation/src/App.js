import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import ReportModal from "./components/Modal";
import ProfileCards from "./components/ProfileCards";
<<<<<<< HEAD
import UserEditForm from "./components/UserEditForm";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const user = false;
=======

import GamesList from "./components/GamesList";
import EditProfile from "./components/EditProfile";

function App() {
  const user = true;
  const profile = false;
>>>>>>> 6ddac36ebb0f3298ed09ddf817df46b3e4e729a9

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
<<<<<<< HEAD
        <Register />
        {/* <UserEditForm /> */}
=======
        <EditProfile />
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
>>>>>>> 6ddac36ebb0f3298ed09ddf817df46b3e4e729a9
      </div>
    </div>
  );
}

export default App;
