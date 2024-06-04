import { render, screen, fireEvent } from '@testing-library/react';
import Chat from '../Chat.js';
import EnterChat from '../EnterChat';
import '@testing-library/jest-dom/extend-expect';
import WS from "jest-websocket-mock";
import io from 'socket.io-client';
import MockedSocket from 'socket.io-mock';
import { act } from '@testing-library/react';

const server = new WS("ws://localhost:1234");


//const client = socketIOClient.connect("ws://localhost:1234");
// const client = new WebSocket("ws://localhost:1234");



const socket = new MockedSocket();

//jest.mock('socket.io-client');

test('should always pass', () => {
    expect(true).toBe(true);
});

test('should receive message', async () => {
    
    await server.connected;
    const client = io.connect("ws://localhost:1234");
    //jest.mock('socket.io-client');
    
    render(<Chat socket={client} username={"test_user"} room="chatroom"/>);



    const chatEntryBox = screen.getByTestId('text-entry-box');
    act(() => {
        fireEvent.change(chatEntryBox, { target: { value: 'hello world' } });
        fireEvent.keyPress(chatEntryBox, { charCode: 13 });
    });
    
    server.on('send_message', (data) => {
        expect(true).toEqual(false);
        expect(data).toEqual('abc');
        done();
    });

    // expect(socket.emit).toHaveBeenCalled();


    // const messageData = {
    //     room: room,
    //     author: username,
    //     message: currentMessage,
    //     time: 
    //     new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes().toString().padStart(2, '0'),
    // };
    // await socket.emit("send_message", messageData);


    //expect(socketIOClient.connect).toHaveBeenCalled();

});


test('should render chatroom', async () => {

    render(<Chat socket={socket} username={"test_user"} room="chatroom"/>);
    const chatRoomElement = screen.getByTestId('chat-room');
    expect(chatRoomElement).toBeInTheDocument();   

});