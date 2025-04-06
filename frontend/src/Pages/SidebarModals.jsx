// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "../App.css";
import { HiOutlineCog } from "react-icons/hi";
import { Tooltip } from "react-tooltip";
import Contactus from "../Components/Contactus";
import { useUser } from "./UserContext";

import {
  FaTrash,
  FaSignOutAlt,
  FaPhoneAlt,
  FaMobileAlt,
  FaUser,
} from "react-icons/fa";

// eslint-disable-next-line react/prop-types
function SidebarModals({ data = true }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isDeletechat, setIsDeleteChat] = useState(false);
  const [activeButton, setIsActiveBtn] = useState("profile");
  const [showQr, setQr] = useState(false);
  const [logout , setLogout  ] = useState(false)
  const [ isOpenContact  , setIsOpenContact ] = useState(false)
  

  const { user } = useUser();

  console.log("your data for sidebar :", data);

  // set the data values
  const isData = data;


   // Function to receive data from child
   const handleDataFromChild = (childData) => {
    setIsOpenContact(childData);
  };

  const OpenModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  // Function to close modal when clicking outside
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      setIsOpenModal(false);
    }
  };

  //   to hide the get mobile app div
  const handleOutsideClickGetMobile = (e) => {
    if (e.target.classList.contains("qrcode-modal-overlay")) {
      setQr(false);
    }
  };
  // here this modal will close the PROFILE modal logic
  const CloseModal = () => {
    document.getElementById("my_modal_3").showModal();
    setIsOpenModal(false);
  };

  // Open Setting Modal
  const OpenSetting = () => {
    document.getElementById("my_modal_3").showModal();
    setIsActiveBtn("general");
    setIsOpenModal(false);
  };

  // open modal for deleting chat
  const DeleteChat = () => {
    setIsOpenModal(false);
    document.getElementById("DeleteChatModal").showModal();
    setIsDeleteChat(true);
  };


// Logout the the user 
const LogoutUser = () => {
    setIsOpenModal(false);
    document.getElementById("LogoutChatModal").showModal();
    setLogout(true)
  };


  const ShowQrCode = () => {
    setQr((prev) => !prev); // Toggle QR code visibility
  };


  const OpenContactComponent = ()=>{
    setIsOpenModal(false)

    setIsOpenContact(true)
  }
  return (
    <>
      {isOpenModal && (
        <div className="modal-overlay" onClick={handleOutsideClick}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className=" email">
              <p onClick={CloseModal}>
                hazrat<span className="email-highlight">17780</span>@gmail.com
              </p>
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
            <div className="modal-item logout" onClick={LogoutUser}>
              <FaSignOutAlt className="icon" />
              <p>Logout</p>
            </div>
          </div>
        </div>
      )}

      {/* Open the Contact Components here  */}
      { isOpenContact && <Contactus sendDataToParent={handleDataFromChild}/>}

      {/* // show the qr code image  */}
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
      {/* Get Mobile App and Profile for opensidebar  */}
      {isData == "" ? (
        <div className="sidebar-item border border-blue-600  rounded-[10px] " onClick={ShowQrCode}>
          <FaMobileAlt className="icon" />
          <h2>Get Mobile</h2>
          <span className="badge">New</span>
        </div>
      ) : (
        ""
      )}

      {/* Sidebar Item (Button) */}

      {isData == "" ? (
        <div className="sidebar-item btn " onClick={OpenModal}>
          <FaUser className="icon" />
          <h2>My Profile</h2>
        </div>
      ) : (
        ""
      )}

      {/* for small mobile app  */}

      {isData != "" ? (
        <div
          className="p-4 absolute bottom-20 mb-5  left-1 z-0"
          onClick={ShowQrCode}
        >
          <FaMobileAlt
            className="icon text-md  cursor-pointer"
            data-tooltip-id="get-mobile-app"
          />
          <Tooltip id="get-mobile-app" place="right" content="Get Mobile App" />
        </div>
      ) : (
        ""
      )}

      {/* for small sidebar icons  */}

      {isData != "" ? (
        <div className="p-4 absolute bottom-10 left-1" onClick={OpenModal}>
          <FaUser className="icon cursor-pointer" data-tooltip-id="profile" />
          <Tooltip id="profile" place="right" content="Profile" />
        </div>
      ) : (
        ""
      )}

      {/* Modals coding is here  */}
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

      {/* Modal for deleteing the all chat  */}
      <dialog id="DeleteChatModal" className="DeleteChatModal">
        <div className="modal-box modal1">
          <form method="dialog">
            {/* Close button inside the form automatically closes the modal */}
            <button
              className="btn-modal1 btn-sm absolute right-2 top-2"
              type="submit"
            >
              ✕
            </button>
            <h1 className="delete-chat-title text-gray-800">
              Delete all Chats
            </h1>
          </form>
          <p className="chat-dlt-description text-gray-700">
            If you confirm deletion, all chat history for this account will be
            permanently erased and cannot be recovered.
          </p>
          <p className="chat-dtl-confirmation text-gray-700">
            Are you sure you want to delete all chat history?
          </p>
          <div className="delete-chat-btn">
            {/* Corrected onClick function to close the modal */}
            <button
              className="hover:bg-gray-100 cancel-btn"
              onClick={() => document.getElementById("DeleteChatModal").close()}
            >
              Cancel
            </button>
            <button className="bg-red-500 text-white hover:bg-red-600">
              Confirm deletion
            </button>
          </div>
        </div>
      </dialog>


      {/* For Logout the user  */}
      <dialog id="LogoutChatModal" className="LogoutChatModal">
        <div className="modal-box modal1">
          <form method="dialog">
            {/* Close button inside the form automatically closes the modal */}
            <button
              className="btn-modal1 btn-sm absolute right-2 top-2"
              type="submit"
            >
              ✕
            </button>
            <h1 className="delete-chat-title text-gray-800">
              Logout current user
            </h1>
          </form>
          
          <p className="chat-dtl-confirmation text-gray-700">
            Are you sure to logout the current login user?
          </p>
          <div className="delete-chat-btn">
            {/* Corrected onClick function to close the modal */}
            <button
              className="hover:bg-gray-100 cancel-btn"
              onClick={() => document.getElementById("LogoutChatModal").close()}
            >
              Cancel
            </button>
            <button className="bg-red-500 text-white hover:bg-red-600">
              Confirm logout
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default SidebarModals;
