import React from 'react';

function EnterChat({ setUsername, joinRoom }) {
    
   return <div data-testid="chat-1" className="ChatContainer">
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Comfortaa" />
    <div className="TitleContainer">
      <h3 id="title">WELCOME TO THE CHATROOM</h3>
    </div>
    <div className="EnterContainer">
      <h3 id="enter-name">Enter a name...</h3>
    </div>
    <div className="form-control">
    <input type = "text"
    className='input-box'
    placeholder='...'
    onChange = {
      (event) => {setUsername(event.target.value);
    }}
    onKeyPress={(event) => {event.key === "Enter" && joinRoom()}}
    />
    </div>
  </div>
}

export default EnterChat;

