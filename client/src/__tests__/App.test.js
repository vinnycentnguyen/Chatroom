import { render, screen, fireEvent } from '@testing-library/react';
import ChatContainer from '../ChatContainer';
import '@testing-library/jest-dom/extend-expect';

test('should always pass', () => {
    expect(true).toBe(true);
});

test('should render ChatContainer component', () => {
    const mockSetUsername = jest.fn();
    const mockJoinRoom = jest.fn();

    render(<ChatContainer setUsername={mockSetUsername} joinRoom={mockJoinRoom} />);
    const chatContainerElement = screen.getByTestId('chat-1');
    expect(chatContainerElement).toBeInTheDocument();
});

test('should update username on input change and call joinRoom on Enter key press', () => {
    const mockSetUsername = jest.fn();
    const mockJoinRoom = jest.fn();

    render(<ChatContainer setUsername={mockSetUsername} joinRoom={mockJoinRoom} />);
    const inputElement = screen.getByPlaceholderText('...');

    // Simulate input change
    fireEvent.change(inputElement, { target: { value: 'testUser' } });
    expect(mockSetUsername).toHaveBeenCalledWith('testUser');

    // Simulate Enter key press
    fireEvent.keyPress(inputElement, { key: 'Enter', code: 'Enter', charCode: 13 });
    expect(mockJoinRoom).toHaveBeenCalled();
});

test('should render title element correctly', () => {
    const mockSetUsername = jest.fn();
    const mockJoinRoom = jest.fn();

    render(<ChatContainer setUsername={mockSetUsername} joinRoom={mockJoinRoom} />);
    const titleElement = screen.getByText('WELCOME TO THE CHATROOM');
    expect(titleElement).toBeInTheDocument();
});

test('should render input box', () => {
    const mockSetUsername = jest.fn();
    const mockJoinRoom = jest.fn();

    render(<ChatContainer setUsername={mockSetUsername} joinRoom={mockJoinRoom} />);
    const inputElement = screen.getByPlaceholderText('...');
    expect(inputElement).toBeInTheDocument();
});

test('input box should accept text', () => {
    const mockSetUsername = jest.fn();
    const mockJoinRoom = jest.fn();

    render(<ChatContainer setUsername={mockSetUsername} joinRoom={mockJoinRoom} />);
    const inputElement = screen.getByPlaceholderText('...');

    fireEvent.change(inputElement, { target: { value: 'testUser' } });
    expect(inputElement.value).toBe('testUser');
});
