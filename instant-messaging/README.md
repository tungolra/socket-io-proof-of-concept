# Proof of Concept for Implementing Socket.io into React App 

### About 
Handy starter code the implement websockets within a React application. From ZainRk's tutorial, I stripped down his application to register new users, log in existing users, and the integration of socket.io for a minimal instant messaging application. Users can create new chats and begin messaging other users. Messages are sent and received in real-time thanks to the integration of websockets. 

This proof of concept was then adapted to create my larger [Chatterbox instant messaging application](https://github.com/tungolra/Chatterbox-mern-app). The use of Redux was destructured from the code to rely on the passing of props in this app and further socket listeners/emitters were integrated to create a more fully-fledged app. Future projects would employ the use of Redux as, upon reflection, produces reliable and cleaner code for larger-scale applications. 

### Installation
1. Clone this repo 
2. <code>npm i</code> to install packages and dependencies. 

### Technologies 
- MongoDB
- Express
- React 
- Node.js
- Mongoose
- React Redux
- Socket.io
- JavaScript

### Credits 
Thanks to [ZainRk's](https://github.com/ZainRk) helpful tutorial that helped me create this minimized starter code. 

Completed Dec 2022 