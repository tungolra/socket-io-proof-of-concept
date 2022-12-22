# Proof of Concept for Implementing Socket.io into React App 

### About 
Handy starter code the implement websockets within a React application. From ZainRk's tutorial, I stripped down his application to register new users, log in existing users, and the integration of socket.io for a minimal instant messaging application. Users can create new chats and begin messaging other users. Messages are sent and received in real-time thanks to the integration of websockets. 

This proof of concept was then adapted to create my larger [Chatterbox instant messaging application](https://github.com/tungolra/Chatterbox-mern-app). Along the way, I familiarized with using React Redux, employing the use of stores, reducers, and actions. The use of Redux was destructured from the code to rely on the passing of props in this app and further socket listeners/emitters were integrated to create a more fully-fledged app. Future projects would employ the use of Redux as, upon reflection, produces reliable and cleaner code for larger-scale applications. 

### Technologies 
- MongoDB
- Express
- React 
- Node.js
- Mongoose
- React Redux
- Socket.io
- JavaScript

### Installation
1. Clone this repo 
2. <code>npm i</code> within <code>instant-messaging</code> directory to install packages and dependencies. 
3. <code>npm i</code> within <code>server</code> directory to install packages and dependencies. 
4. <code>npm i</code> within <code>socket</code> directory to install packages and dependencies. 
5. Create <code>.env</code> files in the <code>server</code> directory.
6. Set environment variables for: 
    - <code>MONGO_DB</code> and use your database connection as its value
    - <code>JWT_KEY=<your_key></code> 
7. <code>npm start</code> within <code>instant-messaging</code> directory to run React
8. <code>npm start</code> within <code>server</code> directory to run server
9. <code>npm start</code> within <code>socket</code> to run socket server
10. Enter <code>localhost:<your_port></code> into your browser to launch the app. To see the application at work, open up a private browser, register two different users, and begin chatting between accounts! 


### Credits 
Thanks to [ZainRk's](https://github.com/ZainRk) helpful tutorial that helped me create this minimized starter code. 

Completed Dec 2022 