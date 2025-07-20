import { useEffect } from "react";
import photo from "../utils/photo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/GptSlice";
import { changeLanguage } from "../utils/configSlice";
import  Chat from "./Chat"

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const HandleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearchButton = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
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
          {showGptSearch &&(
            <h1 className="font-bold rounded-sm p-2 my-6 bg-gray-900"><Link to="/chat">chat</Link></h1>
          )}
          {showGptSearch && (
            <select
              className="p-2 bg-gray-900 text-white m-6"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.indentifier} value={lang.indentifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 m-6 bg-purple-500 rounded-lg"
            onClick={handleGptSearchButton}
          >
            {showGptSearch ? "Home page" : "Gpt search"}
          </button>
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
