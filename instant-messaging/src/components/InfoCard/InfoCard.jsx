import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProfileModal from "../ProfileModal/ProfileModal";
import * as UserApi from "../../api/UserRequests.js";
import { logout } from "../../actions/AuthAction.js";

export default function InfoCard() {
  const [modalOpened, setModalOpened] = useState(false);
  const [profileUser, setProfileUser] = useState({});
  const { user } = useSelector((state) => state.authReducer.authData);
  const dispatch = useDispatch();
  const params = useParams();
  const profileUserId = params.id;

 

  useEffect(() => {
    const fetchProfileUser = async () => {
      if (profileUserId === user._id) {
        setProfileUser(user);
      } else {
        console.log("fetching");
        const profileUser = await UserApi.getUser(profileUserId);
        setProfileUser(profileUser);
        console.log(profileUser);
      }
    };
    fetchProfileUser();
    //if user is changed in react redux, it will rerender useEffect
  }, [user]);
  
  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <div>
      <div>
        <h4>Your Info</h4>
        {/* {user._id === profileUserId ? ( */}
          <div>
            <button onClick={() => setModalOpened(true)}>Edit Profile</button>
            <ProfileModal
              modalOpened={modalOpened}
              setModalOpened={setModalOpened}
              data={user}
            />
          </div>
        {/* ) : (
          ""
        )} */}
      </div>
      <div>
        <span> Info...</span>
        <span> Info...</span>
        <span> Info...</span>
      </div>
      <button className="button logout-button" onClick={handleLogOut}>Log Out</button>
    </div>
  );
}
