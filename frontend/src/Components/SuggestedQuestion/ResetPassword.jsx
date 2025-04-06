import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import "../../CSS/ResetPassword.css"
import { FaArrowUp, FaSmile } from "react-icons/fa";

import EmojiPicker from "emoji-picker-react"; // Import Emoji Picker
import { faGift, faFileUpload } from "@fortawesome/free-solid-svg-icons";

function ResetPassword() {
  const [inputText, setInputText] = useState("");

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showGift, setShowGift] = useState(false); // State for gift section
  const [selectedFile, setSelectedFile] = useState(null); // State for file upload

  // Function to handle emoji selection
  const handleEmojiClick = (emojiData) => {
    setInputText((prev) => prev + emojiData.emoji);
    setShowEmojiPicker(false); // Close picker after selection
  };

  // Function to handle file selection
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]); // Store selected file
  };

  return ( 
    <div className="Reset-password mt-[110px]">
      <p className="Reset-password-question1">Reset password</p>
      <div className="Reset-password-question-answer px-3 py-3">
        <p>
          <FontAwesomeIcon icon={faBrain} className="px-4" />
          Bterms boot
        </p>
        <p className="Reset-password-para">
          What problem did you encounter while using DeepSeek Chat? If you want
          to chat with DeepSeek model, please go https://chat.deepseek.com/
        </p>
      </div>
      <div className="input-div px-4">
        <div className="input-field">
          <input
            type="text"
            placeholder="Type a message..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>

        <div className="icons-field">
          {/* Smile Icon - Opens Emoji Picker */}
          <button
            className="emoji-btn"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          >
            <FaSmile size={15} color="gray" />
          </button>

          {/* Gift Icon - Toggle Gift Section */}
          {!inputText && (
            <button
              className="icon-btn"
              onClick={() => setShowGift((prev) => !prev)}
            >
              <FontAwesomeIcon icon={faGift} />
            </button>
          )}

          {/* File Upload Icon - Open File Picker */}
          {!inputText && (
            <button
              className="icon-btn"
              onClick={() => document.getElementById("fileInput").click()}
            >
              <FontAwesomeIcon icon={faFileUpload} />
            </button>
          )}

          {/* Hidden file input */}
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />

          {/* Show Emoji Picker */}
          {showEmojiPicker && <EmojiPicker onEmojiClick={handleEmojiClick} />}

          {/* Show Submit Icon only if input is not empty */}
          {inputText.trim() && (
            <button>
              <FaArrowUp className="question-submit" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
