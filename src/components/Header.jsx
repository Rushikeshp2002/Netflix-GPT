/* eslint-disable no-unused-vars */
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { mainLogo } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleToggle = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        
      })
      .catch((error) => {
        // An error happened.
  
        navigate("/error");
      });
  };

  // onAuth state change logic
  useEffect(()=>{
    const unsubsribe= onAuthStateChanged(auth, (user) => {
      if (user) {
       
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
        navigate('/browse');
        
      } else {
        // 
        dispatch(removeUser());
        navigate('/');
        
        
      }
    });

   
    return ()=> unsubsribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
   },[])

  //  GPT toggle
  const handleGptSearchClick =()=>{
   dispatch(toggleGptSearchView());    
  }
  const gpt = useSelector((store) => store.gpt.showGptSearch);
  return (
    <div className="md:w-full absolute px-10 py-5 bg-gradient-to-b from-black z-20 flex justify-between">
      <img
        className="md:w-44 w-28"
        src={mainLogo}
        alt="logo"
      />
      {user && (
        <div className="flex items-center">
          <button onClick={handleGptSearchClick} className="p-2 bg-violet-500 mx-4 rounded-md cursor-pointer">
            {gpt?"Homepage":"GPT Search"}
          </button>
          
          <img
            src={user?.photoURL}
            alt="userIcon"
            className="w-8 md:w-11 md:h-11 rounded-md"
          />
          <button onClick={handleToggle} className=" bg-red-500 rounded-md mx-4">
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
