/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/checkValidData"
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { bgImg, userAvatar } from "../utils/constant";

const Login = () => {
  const [isSignin, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  const handleValidate = () => {
    const msg = checkValidData(email.current.value, password.current.value);
   
    setErrorMsg(msg);

    if (errorMsg) return;

    if (!isSignin) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: userAvatar
          }).then(() => {
            // Profile updated!
            const {uid,email,displayName,photoURL} = auth.currentUser
            dispatch(addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            }))
          
            // ...
          }).catch((error) => {
            setErrorMsg(error.message);
            // An error occurred
            // ...
          });
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      // Sign in logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        
        
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignIn = () => {
    setIsSignIn(!isSignin);
  };
  return (
    <div className="w-screen">
      <Header />
      <div className="absolute">
        <img
          src={bgImg}
          alt="bg"
          className="bg-gradient-to-t from-black md:h-auto h-screen object-cover"
        />
      </div>
      <div className="absolute w-full md:h-[116%] h-screen bg-black drop-shadow-lg opacity-50 backdrop-blur-2xl"></div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="md:w-[30%] w-[90%] absolute md:px-16 px-10 md:py-4 bg-black m-auto right-0 left-0 md:my-24 my-36 bg-opacity-70  rounded-md"
      >
        <h1 className="md:text-3xl text-2xl font-semibold text-white py-10 pb-5">
          {isSignin ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignin && (
          <input
            type="text"
            ref={name}
            placeholder="Full Name"
            className="p-4 px-5 my-2 w-full bg-neutral-700 rounded-md text-white"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-4 px-5 py-3.5 my-2 w-full bg-neutral-700 rounded-md text-white"
        />
        <p className="text-red-600 font-medium text-sm">{errorMsg}</p>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 px-5 py-3.5 my-2 w-full bg-neutral-700 rounded-md text-white"
        />
        <button
          onClick={handleValidate}
          className="p-3 rounded-md mt-8 bg-red-600 w-full text-white font-medium"
        >
          {isSignin ? "Sign In" : "Sign Up"}
        </button>
        <div className="inline-flex w-full mt-2 justify-between">
          <div className="flex justify-center items-center">
            <input
              type="checkbox"
              className="w-4 h-4 border focus:ring-transparent outline-none "
            />
            <p className="text-slate-300 text-xs md:mt-1 px-1">Remember Me</p>
          </div>
          <p className="text-slate-300 text-xs mt-1">Need Help?</p>
        </div>
        <p className="text-neutral-500 mt-12 mb-4">
          {isSignin ? "New to Netflix" : "Already registered"}{" "}
          <span
            onClick={toggleSignIn}
            className="text-white font-medium text-sm cursor-pointer"
          >
            {isSignin ? "Sign In Now" : "Sign Up Now"}
          </span>
        </p>
        <p className="text-neutral-500 text-xs md:mb-36 mb-20  md:w-4/5">
          This page is protected by Google reCAPTCHA to ensure youre not a bot.{" "}
          <span className="text-blue-700">Learn more</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
