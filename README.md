# Running Ethan's Favorite Chatroom on your own machine!

1. Clone this repository onto your local machine, into a repository of your choice.
2. Ensure that you have `Node.js` and `NPM` (Node package manager) installed. You can do this by typing opening up your command line interface and typing in the commands `node -v` and `npm -v` to check which versions you have of either.
3. Once you've ensured both are installed (you can install them through the [Node.js Website](https://nodejs.org/en)), enter the `server` repository using your command line interface.
4. Once inside, download the node package first by typing `npm init`, and press enter until you've confirmed all of the options. 
5. Then you need to enter the command `npm install react-scripts --save` while you're in the `server` repository. This will download the appropriate react scripts that will allow you to run the server.
6. After the react-scripts have finished installing, you can type `npm start` to run the server in development mode.
7. Once you have the server running, using the command line interface again, navigate to the `client` repository (you may have to use a second window of the CLI to do this).
8. Once you're in this folder, download the node package first by typing `npm init`. Go through the same steps as with the server, pressing enter until you've accepted all of the options as they are. 
9. Same as the server, type in the command `npm install react-scripts --save` and wait for it finish installing.
10. Then, type in `npm start` here as well. This should open a browser window that displays the chatroom website.
11. You may now open multiple tabs on this computer that go to this webpage, and you can have multiple "users" in the same chatroom now.

SRS Requirements:
Functional Requirements Fulfillment
1.	Draft and Send Messages: Users can write messages in a text input field and send them by pressing Enter or clicking the send button. This is handled by the MessageInput component which updates the message list upon submission.
2.	Message Storage and Deletion: Messages are stored in a NoSQL database (e.g., MongoDB). Users can delete their messages through the UI, triggering a backend API call to remove the message from the database.
3.	Multimedia Messaging: The chat system supports sending images and videos by allowing file uploads. This is implemented using the FileInput component which handles file selection and uploads the media to the server.
4.	User Customization: Users can set and update their display names and profile pictures. This information is stored in the user profile data managed by the backend and updated via API calls.
5.	Group Messaging: Users can create new chat rooms and invite multiple users. This is managed by the RoomManager component which handles room creation and user invitations.
6.	Room Access via Codes: Each chat room has a unique code. Users can join rooms by entering these codes in the join room interface, handled by the RoomJoin component.
7.	Active Users Display: The chat room shows the list of active users, managed by the ActiveUsers component which updates in real-time based on user presence data.
8.	Saving Received Images: Users can save images received in the chat by clicking a download button next to each image, implemented with an <a> tag and download attribute.
9.	Timestamps and Read Receipts:	Messages include timestamps and read receipts, managed by appending metadata to each message object. The frontend displays this information next to each message.
10.	Automatic Room Deletion:	Rooms and their messages are automatically deleted when all users leave. This is managed by a backend cleanup script that checks for empty rooms and purges them.

Non-Functional Requirements Fulfillment
1.	Latency:	Real-time messaging is implemented using WebSockets to ensure message delivery within the specified latency.
2.	Uptime:	Hosted on a reliable cloud platform with redundancy and failover mechanisms to ensure high availability.
3.	Message and Image Size:	Implemented file size checks on the client-side before upload and server-side validation to enforce the 25MB limit.
4.	Automatic Log Removal:	Backend processes ensure logs are deleted when rooms are emptied, maintaining user privacy.
5.	Scalability:	The application is designed to horizontally scale, with load balancers distributing traffic across multiple server instances.
6.	Security:	HTTPS enforced for all communications, SSL certificates installed, and 2FA implemented using a third-party service (e.g., Google Authenticator).
7.	MTTR:	Automated monitoring and alert systems in place to ensure quick response to outages, with a target MTTR of under 3 hours.
8.	Browser Compatibility:	Tested across major browsers (Chrome, Firefox, Safari, Edge) to ensure consistent user experience.
9.	Firewall:	Configured firewall rules to restrict access to the chat server to North American IP addresses only.
