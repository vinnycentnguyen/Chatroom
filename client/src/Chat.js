import React, {useEffect, useState} from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import './Chat.css';
import io from 'socket.io-client';



const socket  = io.connect("http://localhost:3001");

function Chat({socket, username, room}){
    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);
    const [chatters, setChatters] = useState([]);
    const sendMessage = async () =>{
        if(currentMessage !== ""){
            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                time: 
                new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes().toString().padStart(2, '0'),
            };
            await socket.emit("send_message", messageData);
            setMessageList((list) => [...list, messageData]);
            setCurrentMessage("");
        }
    };

    useEffect(() => {
        socket.off("receive_message").on("receive_message", (data) => {
          setMessageList((list) => [...list, data]);
        });
      }, [socket]);

      useEffect(() => {
        socket.on("update_users", (data) => {
            setChatters((list) => data);
        });
      }, [socket]);

    return(
        <div data-testid="chat-room" className='chat-window'>
            <div data-testtid='participant-list' className='chat-participants'>
                <h3>Participants:</h3>
                {chatters.map(chatter => <li>{chatter}</li>)}
            </div>
            <div className='chat-body'>
                <ScrollToBottom className='message-container'>
                {messageList.map((messageContent) => {
                    return (
                    <div className='message' id={username === messageContent.author ? "you" : "other"}>
                        <div>
                            <div className='message-content'>
                                <p>{messageContent.message}</p>
                            </div>
                            <div className='message-metadata'>
                                <p id='time'>{messageContent.time}</p>
                                <p id='author'>{messageContent.author}</p>
                            </div>
                        </div>
                    </div>
                );
                })}
                </ScrollToBottom>
                </div>
            <div className='chat-footer'>
                <input data-testid="text-entry-box" type="text" 
                value={currentMessage}
                placeholder="Type something..." 
                onChange={
                    (event) => {setCurrentMessage(event.target.value);
                }}
                onKeyPress={(event) => {event.key === "Enter" && sendMessage();
                }}
                />
            </div>
        </div>
    )
}
export default Chat;