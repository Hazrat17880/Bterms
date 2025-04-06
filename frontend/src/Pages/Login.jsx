import React from "react";
import { GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Components/Firebase";
import { toast } from "react-toastify";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import { useUser } from "./UserContext";

function Login() {
  const { setUser } = useUser();
  const navigate = useNavigate(); // React Router navigation

 // Login with Facebook
 // Login with Facebook
 const loginWithFacebook = async () => {
  try {
    const provider = new FacebookAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    // console.log("Your login user is :",user);

    const userData = {
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      userId:user.uid
    };

    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // Store in localStorage
    toast.success("User signin successfully")

    navigate("/home2"); // Redirect after login
  } catch (error) {
    toast.error("❌ Login failed!");
    console.error("Facebook Login Error:", error.message);
  }
};

// Login with Google
const googleLogin = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log("Your User data is :",user);

    const userData = {
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      UserId:user.uid
    };

    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // Store in localStorage
    toast.success("User signin successfully")
    navigate("/home2"); // Redirect after login
  } catch (error) {
    toast.error("❌ Google login failed!");
    console.error("Google Login Error:", error.message);
  }
};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-6 sm:p-8 max-w-sm w-full text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Sign in to Continue</h2>

        <button
          className="flex items-center justify-center gap-3 bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg hover:bg-red-600 hover:scale-105 transition duration-300 w-full"
          onClick={googleLogin}
        >
          <FaGoogle className="text-white text-xl" />
          Sign in with Google
        </button>

        <button
          className="flex items-center justify-center gap-3 bg-blue-600 text-white px-4 py-3 rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105 transition duration-300 w-full mt-4"
          onClick={loginWithFacebook}
        >
          <FaFacebook className="text-white text-2xl" />
          Login with Facebook
        </button>

        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </div>
  );
}

export default Login;
