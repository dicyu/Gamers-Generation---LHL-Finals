// Imports
import React, { useEffect, useState } from "react";
import "./Modal.scss";

const ReportModal = (props) => {
  const [form, setForm] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [name]: value });
  };
  // Function for Esc key use to close
  const closeWhenEscapeKey = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  // Clean up for esc key
  useEffect(() => {
    document.body.addEventListener("keydown", closeWhenEscapeKey);
    return function cleanUp() {
      document.body.removeEventListener("keydown", closeWhenEscapeKey);
    };
  }, []);

  // Render for modal
  return (
    <div
      className={`modal ${props.show ? "show" : ""}`}
      onClick={props.onClose}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">{props.title}</h4>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            {props.children}
            <select
              className="report-select"
              id="report__dropDown_One"
              name="report__dropDown_One"
              onChange={handleChange}
            >
              <option value="reason">Match History ID</option>
              <option value="test">Test</option>
            </select>
            <select
              className="report-select"
              id="report__dropDown_Two"
              name="report__dropDown_Two"
              onChange={handleChange}
            >
              <option value="reason">Reason</option>
              <option value="test">Test1</option>
              <option value="test">Test2</option>
              <option value="test">Test3</option>
              <option value="test">Test4</option>
            </select>
            <select
              className="report-select"
              id="report__dropDown_Three"
              name="report__dropDown_Three"
              onChange={handleChange}
            >
              <option value="reason">Maybe Game?</option>
              <option value="test">Game1</option>
              <option value="test">Game2</option>
              <option value="test">Game3</option>
            </select>
            <textarea
              className="report__text"
              id="reportText"
              name="reportText"
              type="text"
              onChange={handleChange}
              placeholder="please explain the detail in here"
            ></textarea>
          </div>
          <div className="modal-footer">
            <button onClick={props.onSubmit} className="button">
              Submit
            </button>
            <button onClick={props.onClose} className="button">
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReportModal;
