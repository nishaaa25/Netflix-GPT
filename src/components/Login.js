import React, { useState, useRef } from "react";
import Header from "./Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import checkValidData from "../utils/validate";
import Footer from "./Footer";

const Login = () => {
  const dispatch = useDispatch();
  const [signIn, setSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const handleBtnClick = (email, password) => {
    const message = checkValidData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;

    if (!signIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName.current.value,
            photoURL: "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg",
          })
            .then(() => {
              const {uid, email, displayName, photoURL} = auth.currentUser;
              dispatch(addUser({uid:uid , email:email, displayName:displayName, photoUrl :photoURL}));
            })
            .catch((error) => {
              setErrorMessage(error)
            });
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
          console.log(errorMessage);
        });
    }
  };
  const handleClick = () => {
    setSignIn(!signIn);
  };
  return (
    <>
      <div className="w-full relative">
        <img
          src="https://screencraft.org/wp-content/uploads/2021/08/Theaters-or-Streamers-StreamYard-1280x720-BG-768x432.png"
          alt="bg"
          className="object-cover w-full h-[100%] absolute top-0 left-0 z-10"
        />
        <div className="absolute h-[100%] w-full top-0 left-0 bg-black bg-opacity-60 z-20"></div>
        <Header />
        <div className="w-[90%] sm:w-[420px] h-[90vh] top-0 left-0 relative z-30 text-white m-auto  bg-black bg-opacity-75 p-12 sm:p-16 rounded-md">
          <div>
            <h1 className="text-[32px] font-semibold mb-7">
              {signIn ? "Sign In" : "Sign Up"}
            </h1>
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                ref={email}
                type="text"
                name="email"
                placeholder="Email or phone number"
                className="bg-[#333] w-full rounded-sm py-3 text-white pl-4 outline-none mb-4"
              />
              {!signIn && (
                <input
                  ref={fullName}
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="bg-[#333] w-full rounded-sm py-3 mb-4 text-white pl-4 outline-none"
                />
              )}
              <input
                ref={password}
                type="password"
                name="password"
                placeholder="Password"
                className="bg-[#333] w-full rounded-sm py-3 text-white pl-4 outline-none"
              />
              <p className="text-[12px] mt-3 text-red-500">{errorMessage}</p>
              <button
                className="bg-red-800 font-semibold py-3 w-full rounded-sm mt-6 "
                onClick={() => handleBtnClick(email, password)}
              >
                {signIn ? "Sign In" : "Sign Up"}
              </button>
              <div className="text-[13px] text-gray-400 flex justify-between items-center mt-3">
                <div className="flex place-items-center">
                  <input type="checkbox" className="mr-1" />
                  <span>Remember me</span>
                </div>
                <span>Need help?</span>
              </div>
            </form>
            <p className="text-gray-600 text-md mt-12">
              {signIn ? "New to Netflix? " : "Already have an account? "}
              <a href="#hey" className="text-white" onClick={handleClick}>
                {signIn ? "Sign up now." : "Sign in."}
              </a>
            </p>

            <p className="text-[13px] mt-2 text-gray-600">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <a href="#hey">Learn more.</a>
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Login;
