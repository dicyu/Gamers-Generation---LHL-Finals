import "./App.scss";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
// import Sidebar from "./components/Sidebar";
import Login from "./components/Login.js";
import Register from "./Register";

import React, { useState } from "react";
// import ReportModal from "./components/Modal";

function App() {
  const user = false;

  // State for Reporting - Modal
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <Navigation />
      <section class="BoxA"></section>
      <Header
        message="Join ---
      Gaming Generation"
      />
      {/*{user ? (
        <span className="sidebar__container">
          <Sidebar />
        </span>
      ) : null}
      {/* input */}
      {/* <Input placeholder={"Death is upon us :D"} /> */}
      {/* Modal Button Press (JUST A TEST BUTTON) */}
      {/* <Login
        email={"newmountcristo32@hotmail.com"}
        password="byCrypt me"
      ></Login> */}
      <Register
        gamer_tag={"ImpactBrother460"}
        email={"newmountcristo32@hotmail.com"}
        password="byCrypt me"
      ></Register>
      {/* <div className="Report"> */}
      {/* <button onClick={() => setShow(trues)}>Report</button> */}
      {/* <ReportModal title="Report" onClose={() => setShow(false)} show={show}>
          <p>Testing</p>
        </ReportModal> */}
      {/* </div> */}
      {/* footer picture */}
    </div>
  );
}

export default App;
