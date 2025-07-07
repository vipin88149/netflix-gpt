import React from "react";
import photo from "../utils/photo.png";
import { signOut } from "firebase/auth"
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store)=> store.user)

  const HandleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/")
      })
      .catch((error) => {
        navigate("/error")
      });
  };
  return (
    <div className="absolute  z-10 w-full bg-gradient-to-b from-black flex justify-between">
      <img
        className="w-48  mx-[9rem] p-1"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-01/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      {user && <div className="flex mx-8 text-white">
        <img
          className="w-10 h-10 my-6 rounded-full mx-3"
          alt="usericon"
          src= {user.photoURL}
        />
        <button onClick={HandleSignOut}>Sign out</button>
      </div>}
    </div>
  );
};

export default Header;
