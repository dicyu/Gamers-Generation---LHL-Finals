import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import ReportModal from "./components/Modal";
import ProfileCards from "./components/ProfileCards";
import Register from "./components/Register";
import Profile from "./components/Profile";
// import UserEditForm from "./components/UserEditForm";
// import Login from "./components/Login";
// import Register from "./components/Register";

import EditProfile from "./components/EditProfile";
import Login from "./components/Login";
import UserEditForm from "./components/UserEditForm";
import GamesList from "./components/GamesList";
import HeaderProfile from "./components/HeaderProfile";

function App() {
  const user = false;
  const profile = false;
  const editProfile = false;

  // State for Reporting - Modal
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <Navigation />
      <Header />
      {user ? <HeaderProfile /> : null}
      <div className="main__container">
        {user ? (
          <>
            <div className="cards_container">
              <ProfileCards />
              <ProfileCards />
            </div>
            <div className="sidebar__container">
              <Sidebar />
            </div>
          </>
        ) : null}
        {editProfile ? <EditProfile /> : null}
        {/* <Register /> */}
        {/* <UserEditForm /> */}
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
