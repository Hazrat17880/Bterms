import React from "react";
import { db } from "./Firebase";
import { collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";

function Data() {
  const userData = {
    name: "John Doe",
    email: "johndoe@example.com",
  };

  const addUser = async () => {
    try {
      const usersCollectionRef = collection(db, "users");
      const docRef = await addDoc(usersCollectionRef, userData);
      console.log("Document added with ID:", docRef.id);
      toast.success("User added successfully!");
    } catch (error) {
      console.error("Error adding document:", error);
      toast.error("Failed to add user.");
    }
  };

  return (
    <button
      className="py-5 px-5 border text-white bg-black cursor-pointer"
      onClick={addUser}
    >
      Add User
    </button>
  );
}

export { Data };
