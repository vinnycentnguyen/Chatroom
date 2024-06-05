import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Chat from '../Chat.js';
import EnterChat from '../EnterChat';
import '@testing-library/jest-dom/extend-expect';
import WS from "jest-websocket-mock";
import MockedSocket from 'socket.io-mock';
import { act } from '@testing-library/react';
//import io from 'socket.io-client';


//jest.mock('socket.io-client');
//const server = new WS("ws://localhost:1234");
//const client = socketIOClient.connect("ws://localhost:1234");
// const client = new WebSocket("ws://localhost:1234");



const socket = new MockedSocket();

test('should always pass', () => {
    expect(true).toBe(true);
});

test('sent message should appear', async () => {
    render(<Chat socket={socket} username={"test_user"} room="chatroom"/>);
    const chatRoomElement = screen.getByTestId('chat-room');
    
    // get the input element (next few lines copied from App.test.js)
    const inputElement = screen.getByTestId('text-entry-box');

    // simulate input
    fireEvent.change(inputElement, { target: { value: 'Test message' } });

    // simulate Enter key press
    fireEvent.keyPress(inputElement, { key: 'Enter', code: 13, charCode: 13 });

    // wait for the message to be sent and received!
    await waitFor(() => {
        expect(screen.getByText('Test message')).toBeInTheDocument();
    });
});


test('should render chatroom', async () => {

    render(<Chat socket={socket} username={"test_user"} room="chatroom"/>);
    const chatRoomElement = screen.getByTestId('chat-room');
    expect(chatRoomElement).toBeInTheDocument();   

});