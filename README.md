PoemSter allows poets across the globe to share their sensational poems.
PoemSter is live @ https://poemster.herokuapp.com/

PoemSter is a MERN stack application facilitating Create, Read, Update and Delete
operations via client server architecture. PoemSter hosts the following functionalities:
1) Registration
2) Login and Authentication
3) Creating and publishing Blog/Poem posts
4) Fetching Blog/Poem posts
5) Updating/Deleting Account Details
6) Updating/Deleting Blogs

This application has a client which is where the user logs in and interacts with the app. The
client has been implemented using React.js, which is essentially an extension of HTML,
CSS and JS. There is also a server which has been implemented using Node.js and
Express.js. There is also a MongoDB database in the backend to store our user data.
A server has been created using Express.js. The pseudocode below demonstrates the internal
working of how a server is created and how a client is supposed to connect to it.

It was created using MERN Stack.
Some libraries used:
Axios for sending requests to endpoints.
Multer for single file upload (images).
Context API for accessing user object across the application.


Scope of Improvements for Future:
Making the UI more Responsive.
Implementing a collaborative filtering ML to suggest poems to users.


You can run the project locally, follow the steps:
1) install node modules in api directory
2) install node modules in client directory
3) run npm start in api directory
4) run npm start in client directory

You can connect to your mongodb cluster through a .env file containg the key : MONGO_URL
and value is the connection link.


