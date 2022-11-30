import React, { useState } from "react";
import ProfileModal from "../ProfileModal/ProfileModal";

export default function InfoCard() {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div>
      <div>
        <h4>Your Info</h4>
        <div>
          <button onClick={() => setModalOpened(true)}>Edit Profile</button>
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
      </div>
      <div>
        <span> Info...</span>
        <span> Info...</span>
        <span> Info...</span>
      </div>
    </div>
  );
}
