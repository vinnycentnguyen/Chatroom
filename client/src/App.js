import React, {useEffect, useState } from 'react';
import './App.css';
import EnterChat from './EnterChat.js'
import Chat from './Chat.js';
import io from 'socket.io-client';

const socket  = io.connect("http://:3001");

function App() {
  const [username, setUsername] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== ""){
      socket.emit("join_room", username);
      setShowChat(true);
    }
  };

  return (
    <div className="App">
      {!showChat ? (
        <EnterChat setUsername={setUsername} joinRoom={joinRoom} />
      ) : (
        <Chat socket={socket} username={username} room="chatroom" />
      )}
    </div>
  );
  

}

export default App;
