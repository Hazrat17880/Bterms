import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import "../../CSS/ChatProblem.css";

import { FaArrowUp, FaSmile } from "react-icons/fa";
import EmojiPicker from "emoji-picker-react"; // Import Emoji Picker
import { faGift, faFileUpload } from "@fortawesome/free-solid-svg-icons";

function ChatProblem() {
  const [inputText, setInputText] = useState("");

  const [uploadImage, setUplaodImage] = useState(false);
  const [profileViolate, setProvileViolate] = useState(false);
  const [other, setOther] = useState(false);
  const [performance, setPerformance] = useState(false);

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showGift, setShowGift] = useState(false); // State for gift section
  const [selectedFile, setSelectedFile] = useState(null); // State for file upload

  // for showing question suggestion
  const [A, setA] = useState(true);
  const [B, setB] = useState(true);
  const [C, setC] = useState(true);
  const [D, setD] = useState(true);

  // Function to handle emoji selection
  const handleEmojiClick = (emojiData) => {
    setInputText((prev) => prev + emojiData.emoji);
    setShowEmojiPicker(false); // Close picker after selection
  };

  // Function to handle file selection
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]); // Store selected file
  };

  /// handle the function that will display the modal
  const HandleQuestionAnswer = (value) => {
    if (value === "A") {
      setUplaodImage(true);
      setA(false);
      setB(false);
      setC(false);
      setD(false);
    } else if (value === "B") {
      setProvileViolate(true);
      setA(false);
      setB(false);
      setC(false);
      setD(false);
    } else if (value === "C") {
      setPerformance(true);
      setA(false);
      setB(false);
      setC(false);
      setD(false);
    } else if (value === "D") {
      setOther(true);
      setA(false);
      setB(false);
      setC(false);
      setD(false);
    }
  };

  return (
    <div className="ChatProblem-container">
      <p className="chat-first-question">Problem about bterm chat</p>
      <div className="chat-first-answer px-3 py-3">
        <p>
          <FontAwesomeIcon icon={faBrain} className="px-4" />
          Bterms boot
        </p>
        <p>
          What problem did you encounter while using DeepSeek Chat? If you want
          to chat with DeepSeek model, please go https://chat.deepseek.com/
        </p>
      </div>
      <div className="chat-second-questions-suggestion">
        {A && (
          <p onClick={() => HandleQuestionAnswer("A")}>
            Upload images and profiles
          </p>
        )}
        {B && (
          <p onClick={() => HandleQuestionAnswer("B")}>
            Profiles may violate terms
          </p>
        )}
        <div className="chat-flex1">
          {C && (
            <p onClick={() => HandleQuestionAnswer("C")}>Model performance</p>
          )}
          {D && <p onClick={() => HandleQuestionAnswer("D")}>Others</p>}
        </div>

        {/* upload images and profiles  */}
        {uploadImage && (
          <div className="upload-profile">
            <p className="upload-question1">Upload images and profiles</p>
            <div className="answerAndInput">
              <div className="upload-question1-answer bg-gray-200 px-2 py-3">
                <p className="upload-answer-logo">
                  <span>
                    <FontAwesomeIcon icon={faBrain} />
                  </span>{" "}
                  <span> Bterms bot</span>
                </p>
                <p className="upload-answer1">
                  We now support uploading files and images, and extracting text
                  only. https://chat.deepseek.com/
                </p>
              </div>

              {/* Input and Icons */}
              <div className="upload-input-div px-4">
                <div className="upload-input-field">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                  />
                </div>

                <div className="upload-icons-field">
                  {/* Smile Icon - Opens Emoji Picker */}
                  <button
                    className="upload-emoji-btn"
                    onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                  >
                    <FaSmile size={15} color="gray" />
                  </button>

                  {/* Gift Icon - Toggle Gift Section */}
                  {!inputText && (
                    <button
                      className="upload-icon-btn"
                      onClick={() => setShowGift((prev) => !prev)}
                    >
                      <FontAwesomeIcon icon={faGift} />
                    </button>
                  )}

                  {/* File Upload Icon - Open File Picker */}
                  {!inputText && (
                    <button
                      className="upload-icon-btn"
                      onClick={() =>
                        document.getElementById("fileInput").click()
                      }
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
                  {showEmojiPicker && (
                    <EmojiPicker onEmojiClick={handleEmojiClick} />
                  )}

                  {/* Show Submit Icon only if input is not empty */}
                  {inputText.trim() && (
                    <button>
                      <FaArrowUp className="upload-question-submit" />
                    </button>
                  )}
                </div>
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
        )}

        {/* for profile may violate terms  */}
        {profileViolate && (
          <div className="upload-profile">
            <p className="upload-question1">Profile may violate terms</p>
            <div className="upload-question1-answer bg-gray-200 px-2 py-3">
              <p className="upload-answer-logo">
                <span>
                  <FontAwesomeIcon icon={faBrain} />
                </span>{" "}
                <span> Bterms bot</span>
              </p>
              <p className="upload-answer1">
                We are continuously optimizing content review policies.
                Currently, we suggest you to appropriately modify the content to
                avoid triggering content security reviews.
              </p>
            </div>

            {/* Input and Icons */}
            <div className="upload-input-div px-4">
              <div className="upload-input-field">
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
              </div>

              <div className="upload-icons-field">
                {/* Smile Icon - Opens Emoji Picker */}
                <button
                  className="upload-emoji-btn"
                  onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                >
                  <FaSmile size={15} color="gray" />
                </button>

                {/* Gift Icon - Toggle Gift Section */}
                {!inputText && (
                  <button
                    className="uplaod-icon-btn"
                    onClick={() => setShowGift((prev) => !prev)}
                  >
                    <FontAwesomeIcon icon={faGift} />
                  </button>
                )}

                {/* File Upload Icon - Open File Picker */}
                {!inputText && (
                  <button
                    className="upload-icon-btn"
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
                {showEmojiPicker && (
                  <EmojiPicker onEmojiClick={handleEmojiClick} />
                )}

                {/* Show Submit Icon only if input is not empty */}
                {inputText.trim() && (
                  <button>
                    <FaArrowUp className="upload-question-submit" />
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
        )}

        {/* Modal performance  */}
        {performance && (
          <div className="upload-profile">
            <p className="upload-question1">Modal performance</p>
            <div className="upload-question1-answer bg-gray-200 px-2 py-3">
              <p className="upload-answer-logo">
                <span>
                  <FontAwesomeIcon icon={faBrain} />
                </span>{" "}
                <span> Bterms bot</span>
              </p>
              <p className="upload-answer1">
                Please provide your feedback in detail (scenario, prompt,
                expected reply, etc.), we will continuously optimize your
                experience.
              </p>
            </div>

            {/* Input and Icons */}
            <div className="upload-input-div px-4">
              <div className="upload-input-field">
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
              </div>

              <div className="upload-icons-field">
                {/* Smile Icon - Opens Emoji Picker */}
                <button
                  className="upload-emoji-btn"
                  onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                >
                  <FaSmile size={15} color="gray" />
                </button>

                {/* Gift Icon - Toggle Gift Section */}
                {!inputText && (
                  <button
                    className="upload-icon-btn"
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
                {showEmojiPicker && (
                  <EmojiPicker onEmojiClick={handleEmojiClick} />
                )}

                {/* Show Submit Icon only if input is not empty */}
                {inputText.trim() && (
                  <button>
                    <FaArrowUp className="upload-question-submit" />
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
        )}

        {/* Others  */}
        {other && (
          <div className="upload-profile">
            <p className="upload-question1">Others</p>
            <div className="upload-question1-answer bg-gray-200 px-2 py-3">
              <p className="upload-answer-logo">
                <span>
                  <FontAwesomeIcon icon={faBrain} />
                </span>{" "}
                <span> Bterms bot</span>
              </p>
              <p className="upload-answer1">
                Please describe your problem in detail. <br />
                If you want to chat with DeepSeek model, go
                https://chat.deepseek.com/
              </p>
            </div>

            {/* Input and Icons */}
            <div className="upload-input-div px-4">
              <div className="upload-input-field">
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
              </div>

              <div className="upload-icons-field">
                {/* Smile Icon - Opens Emoji Picker */}
                <button
                  className="upload-emoji-btn"
                  onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                >
                  <FaSmile size={15} color="gray" />
                </button>

                {/* Gift Icon - Toggle Gift Section */}
                {!inputText && (
                  <button
                    className="upload-icon-btn"
                    onClick={() => setShowGift((prev) => !prev)}
                  >
                    <FontAwesomeIcon icon={faGift} />
                  </button>
                )}

                {/* File Upload Icon - Open File Picker */}
                {!inputText && (
                  <button
                    className="upload-icon-btn"
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
                {showEmojiPicker && (
                  <EmojiPicker onEmojiClick={handleEmojiClick} />
                )}

                {/* Show Submit Icon only if input is not empty */}
                {inputText.trim() && (
                  <button>
                    <FaArrowUp className="upload-question-submit" />
                  </button>
                )}
              </div>
            </div>

            {/* Display selected file name (if any) */}
            {selectedFile && <p>Selected File: {selectedFile.name}</p>}

            {/* Show Gift Section when clicked */}
            {showGift && (
              <div className="upload-gift-section">
                🎁 Gift Section Activated! Add your gift-related content here.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatProblem;
