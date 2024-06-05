# Running Ethan's Favorite Chatroom on your own machine!

1. Clone this repository onto your local machine, into a directory (folder) of your choice.
2. Ensure that you have `Node.js` and `NPM` (Node package manager) installed. You can do this by typing opening up your command line interface and typing in the commands `node -v` and `npm -v` to check which versions you have of either.
3. Once you've ensured both are installed (you can install them through the [Node.js Website](https://nodejs.org/en)), enter the `server` directory using your command line interface.
4. Once inside, download the node package first by typing `npm init`, and press enter until you've confirmed all of the options. 
5. Then you need to enter the command `npm install react-scripts --save` while you're in the `server` directory. This will download the appropriate react scripts that will allow you to run the server.
6. After the react-scripts have finished installing, you can type `npm start` to run the server in development mode.
7. Once you have the server running, using the command line interface again, navigate to the `client` directory (you may have to use a second window of the CLI to do this).
8. Once you're in this folder, download the node package first by typing `npm init`. Go through the same steps as with the server, pressing enter until you've accepted all of the options as they are. 
9. Same as the server, type in the command `npm install react-scripts --save` and wait for it finish installing.
10. Then, type in `npm start` here as well. This should open a browser window that displays the chatroom website.
11. You may now open multiple tabs on this computer that go to this webpage, and you can have multiple "users" in the same chatroom now.

# SRS Requirements:

Upon creating our chatroom, we successfully implemented a way for users to send messages, join the chatroom using a custom name, display active users, timestamps, and room deletion once every user has left the chatroom. 

Unfortunately, we have not implemented multimedia chatting (photos, videos, etc) **yet**, but our chatroom holds the ability for multiple users to join and interact! (Currently over the same wifi network)

# Testing

To be able to run tests by typing `npm test` while in the `client` directory, you must first set up one thing. We might be forgetting something, but you should have to just enter this command: `npm install --save-dev babel-jest @babel/core @babel/preset-env` while in the `Chatroom` directory. You will also possibly need to enter this command as well: `npm install socket.io-mock`.

After finishing setting up, you should be able to enter the command `npm test` while in the `client` directory. This will start running the jest tests, and whenever you save a file, the tests will automatically rerun to make sure everything is still passing. This makes it very handy for continuous integration by making sure our unit tests still pass while we are working on adding and refining features.

