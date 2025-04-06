// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { jwtDecode } from "jwt-decode";

function GoogleLogin() {
  const [user, setUser] = useState(null);

  const handleCredentialResponse = (response) => {
    console.log("Encoded JWT ID token: ", response.credential);
    try {
      const decoded = jwtDecode(response.credential);
      console.log("Decoded token: ", decoded);
      setUser(decoded);
      toast.success("Logged in successfully!");
    } catch (error) {
      console.error("Failed to decode token", error);
      toast.error("Login failed. Please try again.");
    }
  };

  useEffect(() => {
    /* global google */
    if (window.google) {
      google.accounts.id.initialize({
        client_id:
          "772819476570-1brpftu38q0hdvmpllj438iamepb7inf.apps.googleusercontent.com",
        callback: handleCredentialResponse,
      });
      google.accounts.id.renderButton(
        document.getElementById("googleSignInButton"),
        { theme: "outline", size: "large" }
      );
    } else {
      console.error("Google Identity Services not loaded");
    }
  }, []);

  return (
    <div>
      <div id="googleSignInButton"></div>
      {user && (
        <div className="mt-4 p-4 border rounded shadow bg-white">
          <h2 className="text-xl font-bold">Welcome, {user.name}</h2>
          <p className="text-gray-700">Email: {user.email}</p>
          {user.picture && (
            <img
              src={user.picture}
              alt={user.name}
              className="w-16 h-16 rounded-full mt-2"
            />
          )}
        </div>
      )}
    </div>
  );
}

export default GoogleLogin;
