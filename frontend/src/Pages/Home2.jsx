// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import "../CSS/Home2.css";
import { Tooltip } from "react-tooltip";
// import SidebarModals from "./SidebarModals";
// import Contactus from "../Components/Contactus";
import Contact1 from "../Components/Contact1";
import MainComponent from "../Components/MainComponent";
import {
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../Components/Firebase";
import { getAuth, signOut } from "firebase/auth";

// Icons
import { FaMobileAlt, FaComments, FaUserCircle } from "react-icons/fa"; // Importing Mobile & Chat Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentMedical } from "@fortawesome/free-solid-svg-icons";
import { HiOutlineCog } from "react-icons/hi";
import {
  faArrowLeft,
  faArrowRight,
  faFish,
  faFont,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import { FaTrash, FaSignOutAlt, FaPhoneAlt } from "react-icons/fa";

function Home2() {
  // get the user data from the local storage and then display it
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const auth = getAuth();
  const [historyItems, setHistoryItems] = useState([]);

  // delete all the chat
  const deleteUserHistory = async () => {
    try {
      const user = localStorage.getItem("user");
      const parsedUser = JSON.parse(user);

      const chatId = parsedUser?.UserId;
      console.log("Your user from localStorage: ", chatId);

      // Query documents from "User-history" where chatId == user ID
      const q = query(
        collection(db, "User-history"),
        where("chatId", "==", chatId)
      );
      const querySnapshot = await getDocs(q);

      // Loop through and delete each matching document
      querySnapshot.forEach(async (document) => {
        await deleteDoc(doc(db, "User-history", document.id));
        setIsDeleteChat(true);
        console.log("Deleted document ID:", document.id);
      });

      console.log("All user history deleted.");
    } catch (error) {
      console.error("Error deleting user history:", error);
    }
  };

  const LogOutCurrentUser = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out successfully.");
        localStorage.removeItem("user");
        toast.success("User Logout successfully");
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  // Fetch user history on component mount
  useEffect(() => {
    const fetchUserHistory = async () => {
      try {
        const userId = localStorage.getItem("user");
        if (!userId) {
          console.error("User not found in localStorage");
          return;
        }

        const parsedUserId = JSON.parse(userId);
        const chatId = parsedUserId.UserId;

        const q = query(
          collection(db, "User-history"),
          where("chatId", "==", chatId)
        );
        const querySnapshot = await getDocs(q);

        const userHistory = [];
        querySnapshot.forEach((doc) => {
          userHistory.push({ id: doc.id, ...doc.data() });
        });

        setHistoryItems(userHistory); // Save data to state
      } catch (error) {
        console.error("Error fetching user history:", error);
      }
    };

    fetchUserHistory();
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [isClosedSidebar, setIsClosedSidebar] = useState(true);
  const [isOpenProfileModal, setIsOpenProfileModal] = useState(false);

  const [activeButton, setIsActiveBtn] = useState("profile");
  const [showQr, setQr] = useState(false);
  const [logout, setLogout] = useState(false);
  const [isOpenContact, setIsOpenContact] = useState(false);
  const [IsDeleteChat, setIsDeleteChat] = useState(false);

  // Function to close modal when clicking outside
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      setIsOpenProfileModal(false);
    }
  };

  // here this modal will close the PROFILE modal logic
  const CloseModal = () => {
    document.getElementById("my_modal_3").showModal();
    setIsOpenProfileModal(false);
  };

  // open modal for deleting chat
  const DeleteChat = () => {
    setIsOpenProfileModal(false);
    document.getElementById("DeleteChatModal").showModal();
    setIsDeleteChat(true);
  };

  // Logout the the user
  const Logout = () => {
    setIsOpenProfileModal(false);
    document.getElementById("LogoutChatModal").showModal();
    setLogout(true);
  };

  // Open Setting Modal
  const OpenSetting = () => {
    document.getElementById("my_modal_3").showModal();
    setIsActiveBtn("general");
    setIsOpenProfileModal(false);
  };

  const OpenContactComponent = () => {
    setIsOpenProfileModal(false);

    setIsOpenContact(true);
  };

  // Function to receive data from child
  const handleDataFromChild = (childData) => {
    setIsOpenContact(childData);
  };
  // Function to close modal when clicking outside
  const handleOutsideClickGetMobile = () => {
    setQr(false); // Closes the modal
  };

  return (
    <div className="main-container flex min-h-screen ">
      {/* Top Buttons (Visible on Small Screens) */}
      <div className="p-3 w-full flex items-center justify-between bg-white shadow-md fixed top-0 left-0 right-0 md:hidden">
        {/* Hamburger Menu Button */}
        <button
          className="p-3 rounded-lg text-2xl text-gray-700 hover:bg-gray-200 transition-all"
          onClick={() => setIsOpen(true)}
        >
          ☰
        </button>

        {/* Get App Button */}
        <button className="flex items-center me-[120px] border border-blue-400 text-gray-700 gap-2 py-2 px-3 rounded-lg hover:bg-blue-100 transition-all">
          <FaMobileAlt /> Get App
        </button>

        {/* Chat Button (New Icon) */}
        <button className="flex items-center gap-2 p-3 text-2xl text-gray-700 rounded-lg hover:bg-gray-200 transition-all">
          <FaComments />
        </button>
      </div>

      {/* Sidebar (Hidden on Small Screens, Visible on Large Screens) */}
      <div
        className={`fixed ${
          !isClosedSidebar ? "hidden" : "block"
        }  top-0 left-0 h-screen  border w-[70vw] md:w-[20vw] transition-transform shadow-lg bg-[#f4f8fc] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0`}
      >
        {/* Close Button (Only for Small Screens) */}
        <button
          className="absolute top-4 right-4 md:hidden p-3 rounded-lg text-gray-700 hover:bg-gray-200 transition-all"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>
        <p className="p-6 text-2xl font-bold  text-gray-700">Bterms ai</p>
        <button
          className="text-gray-400 absolute top-5 right-5 hover:text-gray-800"
          onClick={() => setIsClosedSidebar(false)}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="md:block hidden" />
        </button>

        {/* ------------------------------ 1st sidebar -------------------------  */}
        {/* 1st sidebar that will open all time  */}
        <div className="complete-sidebar p-4 bg-[#f4f8fc] shadow-md rounded-lg">
          {/* New Chat Button */}
          <button
            className="flex items-center space-x-3 bg-blue-50 text-blue-700 p-3 border 
          rounded-2xl transition-transform transform hover:bg-blue-200 
          hover:scale-105 focus:outline-none ms-5 shadow-sm"
          >
            <FontAwesomeIcon
              icon={faCommentMedical}
              className="text-blue-500 text-xl"
            />
            <span className="font-medium">New Chat</span>
          </button>

          {/* History Section */}
          <ul className="history">
            {historyItems.map((item, index) => {
              const fullText = item?.suggestion || "No suggestion";
              const words = fullText.split(" ");
              const tooltipText =
                words.slice(0, 20).join(" ") + (words.length > 20 ? "..." : "");

              return (
                <li
                  key={index}
                  data-tooltip-id={`tooltip-${index}`}
                  className="tooltip-item-history"
                >
                  {/* Display trimmed suggestion */}
                  {fullText.length > 25
                    ? fullText.slice(0, 25) + "..."
                    : fullText}

                  {/* Tooltip on hover */}
                  <Tooltip
                    id={`tooltip-${index}`}
                    place="top"
                    effect="solid"
                    positionStrategy="fixed"
                  >
                    {tooltipText}
                  </Tooltip>
                </li>
              );
            })}
          </ul>
          {/* Sidebar Footer */}
          <div className="fixed bottom-0 left-0 w-full bg-[#f4f8fc] shadow-lg p-3">
            <div
              className="sidebar-item border border-blue-600  rounded-[10px] "
              onClick={() => setQr(true)}
            >
              <FaMobileAlt className="icon" />
              <h2>Get Mobile</h2>
              <span className="badge">New</span>
            </div>
            <div
              className="sidebar-item btn "
              onClick={() => setIsOpenProfileModal(true)}
            >
              {user && user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
              ) : (
                <FaUserCircle className="w-10 h-10 text-gray-500" />
              )}
              <h2>My Profile</h2>
            </div>
          </div>
        </div>

        {/* ------------------------------------2nd side bar -----------------  */}
      </div>
      {/* 2nd sidebar that will open or close at a button  */}
      {!isClosedSidebar && (
        <div className="half-sidebar w-20 hidden sm:block mt-10">
          <div className="half-first">
            <button onClick={() => setIsClosedSidebar(true)} className="mt-10">
              <FontAwesomeIcon icon={faFish} />
            </button>
            <button onClick={() => setIsClosedSidebar(true)} className="mt-10">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-blue-500 text-xl"
              />
            </button>
            <button className="mt-10">
              <FontAwesomeIcon
                icon={faFont}
                className="text-blue-500 text-xl"
              />
            </button>
          </div>
          <div className="half-second">
            <button className="mb-10" onClick={() => setQr(true)}>
              <FontAwesomeIcon
                icon={faMobileScreenButton}
                className="text-blue-500 text-xl"
              />
            </button>
            <button onClick={() => setIsOpenProfileModal(true)}>
              {user && user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
              ) : (
                <FaUserCircle className="w-10 h-10 text-gray-500" />
              )}
            </button>
          </div>
        </div>
      )}
      {showQr && (
        <div
          className="qrcode-modal-overlay"
          onClick={handleOutsideClickGetMobile}
        >
          <div className="qrcode-modal" onClick={(e) => e.stopPropagation()}>
            <img src="./public/bardcode.png" alt="Qrcode image" id="qr-image" />
            <p>or</p>
            <button id="qr-btn" className="text-blue-800">
              <a href="">download here</a>
            </button>
          </div>
        </div>
      )}

      {/* ================================ main content coding ============================  */}

      {/* Main Content */}
      <div
        className={`main-content w-full md:w-[100vw]  h-screen p-6 ${
          isOpen && "z-[-1]"
        }  `}
      >
        <MainComponent />
      </div>

      {/* ========================================================================================================= */}
      {/* the modals for display the profile etc coding  */}

      {/* ------------- profile modal ---------------  */}
      {isOpenProfileModal && (
        <div className="modal-overlay" onClick={handleOutsideClick}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className=" email">
              <p onClick={CloseModal}>{user.email}</p>
            </div>
            <div className="modal-item" onClick={OpenSetting}>
              <HiOutlineCog className="icon" />
              <p>Settings</p>
            </div>
            <div className="modal-item delete" onClick={DeleteChat}>
              <FaTrash className="icon" />
              <p>Delete all chat</p>
            </div>
            <div className="modal-item" onClick={OpenContactComponent}>
              <FaPhoneAlt className="icon" />
              <p>Contact us</p>
            </div>
            <div className="modal-item logout" onClick={Logout}>
              <FaSignOutAlt className="icon" />
              <p>Logout</p>
            </div>
          </div>
        </div>
      )}
      {/* Open the Contact Components here  */}
      {isOpenContact && <Contact1 sendDataToParent={handleDataFromChild} />}

      {/* ------------------- logout modal -----------------  */}
      {/* For Logout the user  */}
      <dialog id="LogoutChatModal" className="logout-chat-modal">
        <div className="modal-box modal1">
          <form method="dialog">
            {/* Close button inside the form */}
            <button
              className="btn-close absolute right-3 top-3"
              type="submit"
              aria-label="Close"
            >
              ✕
            </button>
            <h1 className="logout-title">Logout Current User</h1>
          </form>

          <p className="logout-description">
            Are you sure you want to log out of your account?
          </p>

          <div className="logout-chat-btn">
            {/* Cancel button closes the modal */}
            <button
              className="btn-cancel"
              onClick={() => document.getElementById("LogoutChatModal").close()}
            >
              Cancel
            </button>
            <button className="btn-confirm" onClick={LogOutCurrentUser}>
              Confirm Logout
            </button>
          </div>
        </div>
      </dialog>

      {/* ------------------------- DELETE CAHT MODAL ------------------  */}
      <dialog id="DeleteChatModal" className="delete-chat-modal">
        <div className="modal-box modal1">
          <form method="dialog">
            {/* Close button inside the form */}
            <button
              className="btn-close absolute right-3 top-3"
              type="submit"
              aria-label="Close"
            >
              ✕
            </button>
            <h1 className="delete-chat-title">Delete All Chats</h1>
          </form>

          <p className="delete-description">
            If you confirm deletion, all chat history for this account will be
            permanently erased and cannot be recovered.
          </p>
          <p className="delete-confirmation">
            Are you sure you want to delete all chat history?
          </p>

          <div className="delete-chat-btn">
            {/* Cancel button closes the modal */}
            <button
              className="btn-cancel"
              onClick={() => document.getElementById("DeleteChatModal").close()}
            >
              Cancel
            </button>
            <button
              className="btn-confirm"
              onClick={async () => {
                await deleteUserHistory(); // Run deletion
                document.getElementById("DeleteChatModal").close(); // Close modal
              }}
            >
              Confirm Deletion
            </button>
          </div>
        </div>
      </dialog>

      {/* ------------------- SETTING AND PROFILE ---------------------  */}
      <dialog id="my_modal_3" className="modal1">
        <div className="modal-box modal1">
          <form method="dialog">
            <button className="btn-modal1 btn-sm   absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3
            className="font-bold text-lg"
            onClick={() => setIsActiveBtn("general")}
          >
            Setting
          </h3>
          <div className="buttonDiv bg-gray-100 ">
            <button
              className={`btn-general ${
                activeButton === "general" ? "active" : ""
              }`}
              onClick={() => setIsActiveBtn("general")}
            >
              General
            </button>
            <button
              className={`btn-profile ${
                activeButton === "profile" ? "active" : ""
              }`}
              onClick={() => setIsActiveBtn("profile")}
            >
              Profile
            </button>
          </div>

          {/* Profile Div  */}
          {activeButton === "profile" && (
            <div className="profile-div">
              <li className="profile-item p-5 text-gray-600">
                <span>Email Address</span> <span>Hazrat17880@gmail.com</span>
              </li>
              <li className="profile-item p-5 text-gray-600">
                <span>Phone Number</span> <span>-</span>
              </li>
              <li className="profile-item p-5 text-gray-600">
                <span>Term of Use</span> <span>view</span>
              </li>
              <li className="profile-item p-5 text-gray-600">
                <span>Privacy Policy</span> <span>view</span>
              </li>
              <li className="profile-item p-5 text-gray-600">
                <span>Delete Account</span>{" "}
                <span>
                  <button>Delete</button>
                </span>
              </li>
            </div>
          )}

          {/* General Div  */}
          {activeButton === "general" && (
            <div className="generalDiv">
              <ul>
                <li className="general-item p-5 text-gray-600">
                  <span>Language</span>
                  <span className="select-wrapper">
                    <select name="cars" id="cars">
                      <option value="English">English</option>
                      <option value="Black">Urdu</option>
                      <option value="Black">Chines</option>
                    </select>
                  </span>
                </li>
                <li className="general-item p-5 text-gray-600">
                  <span>Theme</span>
                  <span className="select-wrapper">
                    <select name="cars" id="cars">
                      <option value="Dark">Dark</option>
                      <option value="Black">Black</option>
                      <option value="Black">white</option>
                    </select>
                  </span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </dialog>
    </div>
  );
}

export default Home2;
