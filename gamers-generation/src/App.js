import React, { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import ReportModal from "./components/Modal";
import ProfileCards from "./components/ProfileCards";
import Profile from "./components/Profile";
// import UserEditForm from "./components/UserEditForm";
import Login from "./components/Login";
// import Register from "./components/Register";
import EditProfile from "./components/EditProfile";

function App() {
  let user = false;
  let profile = false;
  let editProfile = true;

  if (document.cookie) {
    user = true;
  } else {
    user = false;
  }

  // useEffect(

  // )

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
            <Profile />
          </div>
        ) : (
          <Login />
        )}
        {editProfile ? <EditProfile /> : null}
        {profile ? (
          <div className="cards_container">
            <ProfileCards />
            <ProfileCards />
          </div>
        ) : null}
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
