import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ProfileCard() {
  const { user } = useSelector((state) => state.authReducer.authData);
  //for images
  // const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  // const ProfileCard = false;
  return (
    <div>
      Profile Card Component
      <div>
        <div>
          LINKS
          <Link to="../chat">Chat</Link>
        </div>
        <img
          // src={
          //   user.coverPicture
          //     ? serverPublic + user.coverPicture
          //     : serverPublic + "defaultCover.png"
          // }
          src=""
          alt="This is the Profile Cover Image"
        />
        <br />
        <img
          // src={
          //   user.profilePicture
          //     ? serverPublic + user.profilePicture
          //     : serverPublic + "defaultProfile.png"
          // }
          src=""
          alt="This is the Profile Image"
        />
      </div>
      <div>
        <span>
          Name: {user.firstname} {user.lastname}
        </span>
        <br />
        <span>username: {user.username}</span>
      </div>
    </div>
  );
}
