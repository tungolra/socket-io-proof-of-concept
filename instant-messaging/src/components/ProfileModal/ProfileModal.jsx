import React, { useState } from "react";
import { Modal, useMantineTheme } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { uploadImage } from "../../actions/UploadAction";
import { updateUser } from "../../actions/UserAction";

function ProfileModal({ modalOpened, setModalOpened, data }) {
  const theme = useMantineTheme();
  const { password, ...other } = data;
  const [formData, setFormData] = useState(other);
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const dispatch = useDispatch();
  const params = useParams();
  const { user } = useSelector((state) => state.authReducer.authData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      event.target.name === "profileImage"
        ? setProfileImage(img)
        : setCoverImage(img);
    }
  };
  
  // form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    let UserData = formData;
    // if (profileImage) {
    //   const data = new FormData();
    //   const fileName = Date.now() + profileImage.name;
    //   data.append("name", fileName);
    //   data.append("file", profileImage);
    //   UserData.profilePicture = fileName;
    //   try {
    //     dispatch(uploadImage(data));
    //   } catch (err) {
    //     console.log(err);
    //   }
    // }
    // if (coverImage) {
    //   const data = new FormData();
    //   const fileName = Date.now() + coverImage.name;
    //   data.append("name", fileName);
    //   data.append("file", coverImage);
    //   UserData.coverPicture = fileName;
    //   try {
    //     dispatch(uploadImage(data));
    //   } catch (err) {
    //     console.log(err);
    //   }
    // }
    dispatch(updateUser(params.id, UserData));
    setModalOpened(false);
  };

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form onSubmit={handleSubmit}>
        <h3>Your Info</h3>
        <div>
          <input
            value={formData.firstname}
            onChange={handleChange}
            type="text"
            className="infoInput"
            name="firstname"
            placeholder="First Name"
          />

          <input
          value={formData.lastname}
            onChange={handleChange}
            type="text"
            className="infoInput"
            name="lastname"
            placeholder="Last Name"
          />
        </div>

        <div>
          Profile Image
          <input type="file" name="profileImg" onChange={onImageChange} />
          <br />
          Cover Image
          <input type="file" name="coverImg" onChange={onImageChange}/>
          <br />
        </div>
        <button type="submit">Update</button>
      </form>
    </Modal>
  );
}
export default ProfileModal;
