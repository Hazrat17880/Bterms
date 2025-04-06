// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "../../CSS/CannotSignup.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaArrowUp, FaSmile } from "react-icons/fa";
import EmojiPicker from "emoji-picker-react"; // Import Emoji Picker
import {
  faBrain,
  faGift,
  faFileUpload,
} from "@fortawesome/free-solid-svg-icons";

function CannotSignup() {
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
    <div className="cannot-signup">
      <p className="question-title1">Cannot Signup</p>
      <div className="question-answer bg-gray-200 px-2 py-3">
        <p className="answer-logo">
          <span>
            <FontAwesomeIcon icon={faBrain} />
          </span>{" "}
          <span> Bterms bot</span>
        </p>
        <p className="answer-details">
          Due to large-scale malicious attacks on Bterms services, we are
          temporarily limiting registrations to ensure continued service.
          Existing users can log in as usual. Thanks for your understanding and
          support.
        </p>
      </div>

      {/* Input and Icons */}
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

      {/* Display selected file name (if any) */}
      {selectedFile && <p>Selected File: {selectedFile.name}</p>}

      {/* Show Gift Section when clicked */}
      {showGift && (
        <div className="gift-section">
          🎁 Gift Section Activated! Add your gift-related content here.
        </div>
      )}
    </div>
  );
}

export default CannotSignup;
