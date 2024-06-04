import React, {useEffect, useState } from 'react';
import './App.css';
import ChatContainer from './ChatContainer.js'
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

  return (
    <div className="App">
      {!showChat ? (
        <ChatContainer setUsername={setUsername} joinRoom={joinRoom} />
      ) : (
        <Chat socket={socket} username={username} room="chatroom" />
      )}
    </div>
  );
  

}

export default App;
