import React, { useEffect } from "react";
import photo from "../utils/photo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const HandleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }

      return () => unsubscribe();
    });
  }, []);

  return (
    <div className="absolute  z-10 w-full bg-gradient-to-b from-black flex justify-between">
      <img className="w-48  mx-[8rem] p-1" src={LOGO} alt="logo" />

      {user && (
        <div className="flex mx-8 text-white">
          <img
            className="w-10 h-10 my-6 rounded-full mx-3"
            alt="usericon"
            src={photo}
          />
          <button onClick={HandleSignOut}>Sign out</button>
        </div>
      )}
    </div>
  );
};

export default Header;
