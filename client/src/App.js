import React, {useEffect, useState } from 'react';
import './App.css';
import Chat from './Chat.js';
import io from 'socket.io-client';

const socket  = io.connect("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== ""){
      socket.emit("join_room", username);
      setShowChat(true);
    }
  };

  return <div className="App">
    {!showChat ? (
    <div class="ChatContainer">
      <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Comfortaa" />
      <div class="TitleContainer">
        <h3 id="title">WELCOME TO THE CHATROOM</h3>
      </div>
      <div class="EnterContainer">
        <h3 id="enter-name">Enter a name...</h3>
      </div>
      <div class="form-control">
      <input type = "text"
      autoFocus
      onBlur={({target}) => target.focus()}
      placeholder='...'
      onChange = {
        (event) => {setUsername(event.target.value);
      }}
      onKeyPress={(event) => {event.key === "Enter" && joinRoom()}}
      />
      </div>
    </div>
    
    )
    :(
    <Chat socket={socket} username={username} room="chatroom"/>
    )}
  </div>
  

}

export default App;
