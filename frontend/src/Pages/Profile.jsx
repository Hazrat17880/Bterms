import React, { useEffect, useState } from "react";
import { auth, db } from "../Components/Firebase";
import { doc, getDoc } from "firebase/firestore";

function Profile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = doc(db, "Users", user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          setUserData(userSnap.data());
        } else {
          console.log("No such document!");
        }
      } else {
        console.log("User is not logged in");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      {userData ? (
        <>
          <h1 className="text-xl font-bold">
            Welcome, {userData.firstName}!
          </h1>
          <p>Email: {userData.email}</p>
          <p>First Name: {userData.firstName}</p>
          <p>Last Name: {userData.lastName}</p>
        </>
      ) : (
        <p>No user data available.</p>
      )}
    </div>
  );
}

export default Profile;
