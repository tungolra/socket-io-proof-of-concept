// socket.io server installation: https://socket.io/docs/v4/server-installation/

const io = require("socket.io")(8800, {
  cors: {
    origin: "http://localhost:3000",
  },
});

// collect users that are subscribed to socket server
let activeUsers = [];

io.on("connection", (socket) => {
  //add new user ; newUserId passed in from react side
  socket.on("new-user-add", (newUserId) => {
    //if user not found, then add to socket server
    if (!activeUsers.some((user) => user.userId === newUserId)) {
      //assigns new socket id
      activeUsers.push({
        userId: newUserId,
        socketId: socket.id,
      });
    }
    //sending data to client-side via io.emit; client side retrieves data by
    //calling 'get-users'
    console.log("Connected Users", activeUsers);
    io.emit("get-users", activeUsers);
  });
  // if client disconnects
  socket.on("disconnect", () => {
    //from all the user, find the specific user trying to disconnect
    activeUsers = activeUsers.filter((user) => user.socketId !== socket.id);
    //show remaining active users
    console.log("User Disconnected", activeUsers);
    // send active users to client-side again
    io.emit("get-users", activeUsers);
  });
});
