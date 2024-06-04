# Running Ethan's Favorite Chatroom on your own machine (not recommended)

1. Clone this repository onto your local machine, into a repository of your choice
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
