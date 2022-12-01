import React, { useEffect, useState } from "react";
import { addMessage, getMessages } from "../../api/MessageRequest";
import { getUser } from "../../api/UserRequests";
import { format } from "timeago.js";
import InputEmoji from "react-input-emoji";

export default function ChatBox({
  chat,
  currentUserId,
  setSendMessage,
  receivedMessage,
}) {
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  console.log(messages);

  useEffect(() => {
    if (receivedMessage !== null && receivedMessage?.chatId == chat?._id) {
      setMessages([...messages, receivedMessage]);
    }
  }, [receivedMessage]);

  //fetching data to render chatbox
  useEffect(() => {
    const userId = chat?.members?.find((id) => id !== currentUserId);
    const getUserData = async () => {
      try {
        const { data } = await getUser(userId);
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    };
    if (chat !== null) getUserData();
  }, [chat, currentUserId]);

  //fetchingdata for messages
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await getMessages(chat._id);
        setMessages(data);
      } catch (error) {
        console.log(error);
      }
    };
    if (chat !== null) fetchMessages();
  }, [chat]);

  function handleChange(newMessage) {
    setNewMessage(newMessage);
  }
  async function handleSend(e) {
    e.preventDefault();
    const message = {
      senderId: currentUserId,
      text: newMessage,
      chatId: chat._id,
    };
    try {
      const { data } = await addMessage(message);
      setMessages([...messages, data]);
      setNewMessage("");
    } catch (error) {
      console.log(error);
    }
    //send message to socket server
    const receiverId = chat.members.find((id) => id !== currentUserId);
    setSendMessage({ ...message , receiverId});
  }

  return (
    <>
      <div className="chatbox-container">
        {chat ? (
          <>
            <div className="chat-body">
              {messages.map((message) => (
                <>
                  <div
                    className={
                      message.senderId === currentUserId
                        ? "message own"
                        : "message"
                    }
                    style={{border: "1px solid black"}}
                  >
                    <span>{message.senderId === currentUserId ? "Ralph" : "Kendra"}</span>
                    <br />
                    <span>{message.text}</span>{" "}
                    <br/>
                    <span>Sent {format(message.createdAt)}</span>
                  </div>
                </>
              ))}
            </div>
            {/* chat sender */}

            <div>+</div>
            <InputEmoji value={newMessage} onChange={handleChange} />
            <button onClick={handleSend}>Send</button>
          </>
        ) : (
          <span>Click a Chat to Start Conversation</span>
        )}
      </div>
    </>
  );
}
