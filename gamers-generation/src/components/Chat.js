import React, { useState } from 'react'
import './Chat.scss'

function Chat(props) {
  const [form, setForm] = useState({});

  const handleChange = (event) => {
    const value = event.target.value;
    setForm({ ...form, value });
  };

  // const onSubmit = () => {
  //   console.log(form)
  // }

  console.log(form)

  return (
    <div className='chat'>
      <div className='chat__name'>
        {/* Dynamically changed name */}
        <h1>@Ren</h1>
      </div>
      <div className='chat__chat-container'>
      </div>
      <textarea
        className="chat__text"
        id="chatText"
        name="chatText"
        type="text"
        onChange={handleChange}
        placeholder="Enter...">
      </textarea>
      <div className='chat-footer'>
      <button onClick={props.onSubmit} className="button">
        ⏎
      </button>
      </div>
    </div>
  )
}

export default Chat;