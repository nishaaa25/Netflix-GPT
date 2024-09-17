import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import logo from "../logo.png";
import { SUPPORTED_LANGUAGE } from "../constants/constant";
import { addGptMovies, addIsGptSearchActive } from "../utils/searchSlice";
import { addUser, removeUser } from "../utils/userSlice";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import PortraitOutlinedIcon from "@mui/icons-material/PortraitOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const isActive = useSelector((store) => store.gptSearch.isGptSearchActive);

  const handleChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  // SIGNOUT FUNCTION
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  //
  const handleClick = () => {
    dispatch(addIsGptSearchActive());
    dispatch(addGptMovies({ moviesResults: null, moviesName: null }));
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
            photoUrl: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div
      className={`px-4 lg:px-10 py-4 z-50 ${
        user ? "fixed top-0 left-0" : "relative"
      } w-full flex justify-between ${
        user ? "bg-black bg-opacity-90" : "bg-transparent"
      }`}
    >
      <div className="flex place-items-center">
        <div className="cursor-pointer">
          <Link to="/browse">
            <img src={logo} alt="logo" className="w-[100px] md:w-[120px]"/>
          </Link>
        </div>

        {user && (
          <div className="hidden md:block">
            <div className="flex place-items-center gap-10 text-white ml-10 text-sm font-semibold ">
              <Link href="/browse" className="active:text-red-800">
                Movies
              </Link>
              <Link href="/browse" className="active:text-red-800">
                TV Shows
              </Link>
              <Link href="/browse" className="active:text-red-800">
                New&Popular
              </Link>
            </div>
          </div>
        )}
      </div>

      {user && (
        <div className="flex gap-4">
          {isActive && (
            <select
              className="bg-slate-900 px-1 text-white"
              onChange={handleChange}
            >
              {SUPPORTED_LANGUAGE.map((lang) => (
                <option
                  key={lang.identifier}
                  value={lang.identifier}
                  className="py-2"
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="px-6 hover:bg-purple-700 rounded-md bg-purple-500 text-white"
            onClick={handleClick}
          >
            {isActive ? "Home Page" : "GPT Search"}
          </button>
          <div className="flex flex-col place-items-end group">
            <img
              src={user.photoUrl}
              alt="user"
              width={40}
              className="rounded-sm"
            />
            <div className="absolute top-12 flex flex-col items-end">
              <div className="hidden group-hover:block text-white">
                <ArrowDropUpIcon fontSize="large" />
              </div>
              <div className=" bg-black bg-opacity-90 w-[200px] hidden group-hover:block text-white">
                <div className="border-b border-gray-600 p-4">
                  <div className=" flex place-items-center gap-2 mb-4">
                    <img
                      src={user.photoUrl}
                      alt="user"
                      width={32}
                      className="rounded-sm"
                    />
                    <p className="text-sm font-semibold hover:underline cursor-pointer">
                      {user.displayName}
                    </p>
                  </div>
                  <div className="flex gap-2 place-items-center mt-4">
                    <CreateOutlinedIcon fontSize="medium" />
                    <p className="text-sm cursor-pointer font-semibold hover:underline">
                      Manage Profiles
                    </p>
                  </div>
                  <div className="flex gap-2 place-items-center mt-4">
                    <PortraitOutlinedIcon fontSize="medium" />
                    <p className="text-sm cursor-pointer font-semibold hover:underline">
                      Transfer Profile
                    </p>
                  </div>
                  <div className="flex gap-2 place-items-center mt-4">
                    <HelpOutlineOutlinedIcon fontSize="medium" />
                    <p className="text-sm cursor-pointer font-semibold hover:underline">
                      Account
                    </p>
                  </div>
                  <div className="flex gap-2 place-items-center mt-4">
                    <PersonOutlineOutlinedIcon fontSize="medium" />
                    <p className="text-sm cursor-pointer font-semibold hover:underline">
                      Help Centre
                    </p>
                  </div>
                </div>
                <button
                  className="py-4 text-center text-sm w-full hover:underline cursor-pointer font-semibold"
                  onClick={handleSignOut}
                >
                  Sign out of netflix
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
