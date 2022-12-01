import React, { useEffect, useState } from "react";
import { getUser } from "../../api/UserRequests";
import "./Conversation.css"

export default function Conversation({ data, currentUserId }) {
  const [userData, setUserData] = useState(null);
 

  

  useEffect(() => {
    //identify which user in convo
    const userId = data.members.find((id) => id !== currentUserId);
    const getUserData = async () => {
        try {
            const { data } = await getUser(userId);
            setUserData(data);
            
        } catch (error) {
            console.log(error)
        }
    };
    getUserData()
  }, []);


  return (
  <div>
    <div> Conversation Component
    <br/>
    
     <span className="friends">{userData?.username} {userData?._id}</span>


    </div>
  </div>
  );
}
