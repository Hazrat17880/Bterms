import React, { useState } from "react";
import { faBrain, faL } from "@fortawesome/free-solid-svg-icons";
import "../../CSS/ApiProblems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaArrowUp, FaSmile } from "react-icons/fa";
import EmojiPicker from "emoji-picker-react"; // Import Emoji Picker
import { faGift, faFileUpload } from "@fortawesome/free-solid-svg-icons";

function ApiProblem() {
  // for showing question suggestion
  const [A, setA] = useState(true);
  const [B, setB] = useState(true);
  const [C, setC] = useState(true);
  const [D, setD] = useState(true);
  const [E, setE] = useState(true);
  const [F, setF] = useState(true);
  const [G, setG] = useState(true);
  const [H, setH] = useState(true);
  const [I, setI] = useState(true);

  // FOR MODAL TO BE OPEN
  const [showPayment, setShowPayment] = useState(false);
  const [expireDate, setExpireDate] = useState(false);
  const [rateLimit, setRateLimit] = useState(false);
  const [apiSpeed, setApiSpeed] = useState(false);
  const [apiCall, setApiCall] = useState(false);
  const [parameterSetting, setParameterSetting] = useState(false);
  const [modalPerformance, setModalPerformance] = useState(false);
  const [error, setError] = useState(false);
  const [othermodal, setOtherModal] = useState(false);

  const [inputText, setInputText] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showGift, setShowGift] = useState(false); // State for gift section
  const [selectedFile, setSelectedFile] = useState(null);

  // for sub modals

  const [cannotPay, setCannotPay] = useState(false);
  const [transactionPending, setTransactionPending] = useState(false);
  const [otherMethods, setOtherMethods] = useState(false);
  const [sub1, setSub1] = useState(true);
  const [sub2, setSub2] = useState(true);
  const [sub3, setSub3] = useState(true);
  /// handle the function that will display the modal

  // sub modules controller

  const HandleQuestionAnswer = (value) => {
    if (value === "A") {
      setShowPayment(true);
      setA(false);
      setB(false);
      setC(false);
      setD(false);
      setE(false);
      setF(false);
      setG(false);
      setH(false);
      setI(false);
    } else if (value === "B") {
      setExpireDate(true);
      setA(false);
      setB(false);
      setC(false);
      setD(false);
      setE(false);
      setF(false);
      setG(false);
      setH(false);
      setI(false);
    } else if (value === "C") {
      setRateLimit(true);
      setA(false);
      setB(false);
      setC(false);
      setD(false);
      setE(false);
      setF(false);
      setG(false);
      setH(false);
      setI(false);
    } else if (value === "D") {
      setApiSpeed(true);
      setA(false);
      setB(false);
      setC(false);
      setD(false);
      setE(false);
      setF(false);
      setG(false);
      setH(false);
      setI(false);
    } else if (value === "E") {
      setApiCall(true);
      setA(false);
      setB(false);
      setC(false);
      setD(false);
      setE(false);
      setF(false);
      setG(false);
      setH(false);
      setI(false);
    } else if (value === "F") {
      setParameterSetting(true);
      setA(false);
      setB(false);
      setC(false);
      setD(false);
      setE(false);
      setF(false);
      setG(false);
      setH(false);
      setI(false);
    } else if (value === "G") {
      setModalPerformance(true);
      setA(false);
      setB(false);
      setC(false);
      setD(false);
      setE(false);
      setF(false);
      setG(false);
      setH(false);
      setI(false);
    } else if (value === "H") {
      setError(true);
      setA(false);
      setB(false);
      setC(false);
      setD(false);
      setE(false);
      setF(false);
      setG(false);
      setH(false);
      setI(false);
    } else if (value === "I") {
      setOtherModal(true);
      setA(false);
      setB(false);
      setC(false);
      setD(false);
      setE(false);
      setF(false);
      setG(false);
      setH(false);
      setI(false);
    }
  };

  // Function to handle emoji selection
  const handleEmojiClick = (emojiData) => {
    setInputText((prev) => prev + emojiData.emoji);
    setShowEmojiPicker(false); // Close picker after selection
  };

  // Function to handle file selection
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]); // Store selected file
  };

  // sub controller
  const SubController = (data) => {
    if (data === "A") {
      setCannotPay(true);
      setSub1(false);
      setSub2(false);
      setSub3(false);
    }
    if (data === "B") {
      setTransactionPending(true);
      setSub1(false);
      setSub2(false);
      setSub3(false);
    }
    if (data === "C") {
      setOtherMethods(true);
      setSub1(false);
      setSub2(false);
      setSub3(false);
    }
    
  };

  return (
    <div className="Api-problem-container pt-4">
      <p className="api-question">Problem about bterm chat</p>
      <div className="api-first-answer px-3 py-3">
        <p>
          <FontAwesomeIcon icon={faBrain} className="px-4" />
          Bterms boot
        </p>
        <p>What problem did you encounter while using DeepSeek API?</p>
      </div>

      {/* SUGGESTED QUESTION ARE DISPLAYED HERE  */}
      <div className="api-second-questions-suggestion">
        {A && (
          <p onClick={() => HandleQuestionAnswer("A")}>Payment and billing</p>
        )}
        {B && (
          <p onClick={() => HandleQuestionAnswer("B")}>
            Expiration date for my balance
          </p>
        )}
        <div className="api-sub-row1">
          {C && <p onClick={() => HandleQuestionAnswer("C")}>Rate Limits</p>}
          {D && <p onClick={() => HandleQuestionAnswer("D")}>API's speed</p>}
          {E && <p onClick={() => HandleQuestionAnswer("E")}>API call</p>}
        </div>
        <div className="api-sub-row2">
          {F && (
            <p onClick={() => HandleQuestionAnswer("F")}>Parameter setting</p>
          )}
          {G && (
            <p onClick={() => HandleQuestionAnswer("G")}>Model performance</p>
          )}
        </div>
        {H && (
          <p onClick={() => HandleQuestionAnswer("H")}>
            400 error with 'Content Exist Risk'
          </p>
        )}
        {I && <p onClick={() => HandleQuestionAnswer("I")}>Others</p>}
      </div>

      {/* List of modal that will open  */}
      {showPayment && (
        <div className="ShowPayment">
          <p className="showPayment-question1">Payment and billing</p>
          <div className="showPayment-question-answer bg-gray-200 px-2 py-3">
            <p className="answer-logo">
              <span>
                <FontAwesomeIcon icon={faBrain} />
              </span>{" "}
              <span> Bterms bot</span>
            </p>
            <p className="showPayment-answer-details">
              It may take 24-72 hours to complete one payment. The process relys
              on PayPal workflow and we can hardly accelerate. Thank you for
              your patience. What type of billing help do you need?
            </p>
          </div>
          {sub1 && (
            <p
              className="api-suggestion-question"
              onClick={() => SubController("A")}
            >
              Cannot pay via PayPal or Alipay
            </p>
          )}

          {sub2 && (
            <p
              className="api-suggestion-question"
              onClick={() => SubController("B")}
            >
              Transaction pending
            </p>
          )}
          {sub3 && (
            <p
              className="api-suggestion-question"
              onClick={() => SubController("C")}
            >
              Other payment methods
            </p>
          )}
          {/* Input and Icons */}

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
      {expireDate && (
        <div className="ShowPayment">
          <p className="showPayment-question1">Expiration date for my balance</p>
          <div className="showPayment-question-answer bg-gray-200 px-2 py-3">
            <p className="answer-logo">
              <span>
                <FontAwesomeIcon icon={faBrain} />
              </span>{" "}
              <span> Bterms bot</span>
            </p>
            <p className="showPayment-answer-details">
              Due to large-scale malicious attacks on Bterms services, we are
              temporarily limiting registrations to ensure continued service.
              Existing users can log in as usual. Thanks for your understanding
              and support.
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
              {showEmojiPicker && (
                <EmojiPicker onEmojiClick={handleEmojiClick} />
              )}

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
      )}
      {rateLimit && (
        <div className="ShowPayment">
          <p className="showPayment-question1">Rate Limits</p>
          <div className="showPayment-question-answer bg-gray-200 px-2 py-3">
            <p className="answer-logo">
              <span>
                <FontAwesomeIcon icon={faBrain} />
              </span>{" "}
              <span> Bterms bot</span>
            </p>
            <p className="showPayment-answer-details">
              Due to large-scale malicious attacks on Bterms services, we are
              temporarily limiting registrations to ensure continued service.
              Existing users can log in as usual. Thanks for your understanding
              and support.
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
              {showEmojiPicker && (
                <EmojiPicker onEmojiClick={handleEmojiClick} />
              )}

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
      )}
      {apiSpeed && (
        <div className="ShowPayment">
          <p className="showPayment-question1">API's speed</p>
          <div className="showPayment-question-answer bg-gray-200 px-2 py-3">
            <p className="answer-logo">
              <span>
                <FontAwesomeIcon icon={faBrain} />
              </span>{" "}
              <span> Bterms bot</span>
            </p>
            <p className="showPayment-answer-details">
              Due to large-scale malicious attacks on Bterms services, we are
              temporarily limiting registrations to ensure continued service.
              Existing users can log in as usual. Thanks for your understanding
              and support.
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
              {showEmojiPicker && (
                <EmojiPicker onEmojiClick={handleEmojiClick} />
              )}

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
      )}
      {apiCall && (
        <div className="ShowPayment">
          <p className="showPayment-question1">API call</p>
          <div className="showPayment-question-answer bg-gray-200 px-2 py-3">
            <p className="answer-logo">
              <span>
                <FontAwesomeIcon icon={faBrain} />
              </span>{" "}
              <span> Bterms bot</span>
            </p>
            <p className="showPayment-answer-details">
              Due to large-scale malicious attacks on Bterms services, we are
              temporarily limiting registrations to ensure continued service.
              Existing users can log in as usual. Thanks for your understanding
              and support.
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
              {showEmojiPicker && (
                <EmojiPicker onEmojiClick={handleEmojiClick} />
              )}

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
      )}
      {parameterSetting && (
        <div className="ShowPayment">
          <p className="showPayment-question1">Parameter setting</p>
          <div className="showPayment-question-answer bg-gray-200 px-2 py-3">
            <p className="answer-logo">
              <span>
                <FontAwesomeIcon icon={faBrain} />
              </span>{" "}
              <span> Bterms bot</span>
            </p>
            <p className="showPayment-answer-details">
              Due to large-scale malicious attacks on Bterms services, we are
              temporarily limiting registrations to ensure continued service.
              Existing users can log in as usual. Thanks for your understanding
              and support.
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
              {showEmojiPicker && (
                <EmojiPicker onEmojiClick={handleEmojiClick} />
              )}

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
      )}
      {modalPerformance && (
        <div className="ShowPayment">
          <p className="showPayment-question1">Model performance</p>
          <div className="showPayment-question-answer bg-gray-200 px-2 py-3">
            <p className="answer-logo">
              <span>
                <FontAwesomeIcon icon={faBrain} />
              </span>{" "}
              <span> Bterms bot</span>
            </p>
            <p className="showPayment-answer-details">
              Due to large-scale malicious attacks on Bterms services, we are
              temporarily limiting registrations to ensure continued service.
              Existing users can log in as usual. Thanks for your understanding
              and support.
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
              {showEmojiPicker && (
                <EmojiPicker onEmojiClick={handleEmojiClick} />
              )}

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
      )}
      {error && (
        <div className="ShowPayment">
          <p className="showPayment-question1">400 error with 'Content Exist Risk'</p>
          <div className="showPayment-question-answer bg-gray-200 px-2 py-3">
            <p className="answer-logo">
              <span>
                <FontAwesomeIcon icon={faBrain} />
              </span>{" "}
              <span> Bterms bot</span>
            </p>
            <p className="showPayment-answer-details">
              Due to large-scale malicious attacks on Bterms services, we are
              temporarily limiting registrations to ensure continued service.
              Existing users can log in as usual. Thanks for your understanding
              and support.
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
              {showEmojiPicker && (
                <EmojiPicker onEmojiClick={handleEmojiClick} />
              )}

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
      )}
      {othermodal && (
        <div className="ShowPayment">
          <p className="showPayment-question1">Others</p>
          <div className="showPayment-question-answer bg-gray-200 px-2 py-3">
            <p className="answer-logo">
              <span>
                <FontAwesomeIcon icon={faBrain} />
              </span>{" "}
              <span> Bterms bot</span>
            </p>
            <p className="showPayment-answer-details">
              Due to large-scale malicious attacks on Bterms services, we are
              temporarily limiting registrations to ensure continued service.
              Existing users can log in as usual. Thanks for your understanding
              and support.
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
              {showEmojiPicker && (
                <EmojiPicker onEmojiClick={handleEmojiClick} />
              )}

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
      )}


      {/* cannot pay via payapal  */}
      {cannotPay && (
        <div className="ShowPayment">
          <p className="showPayment-question1 mt-5">Can not pay via Paypal or Alipay</p>
          <div className="showPayment-question-answer bg-gray-200 px-2 py-3">
            <p className="answer-logo">
              <span>
                <FontAwesomeIcon icon={faBrain} />
              </span>{" "}
              <span> Bterms bot</span>
            </p>
            <p className="showPayment-answer-details">
              We apologize for any inconvenience caused. It might be due to your
              country or region not currently supporting PayPal and Alipay. If
              this issue is not caused by your location, please provide us with
              more specific account information.
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
              {showEmojiPicker && (
                <EmojiPicker onEmojiClick={handleEmojiClick} />
              )}

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
      )}

      {/* Transaction pending  */}
      {transactionPending && (
        <div className="ShowPayment">
          <p className="showPayment-question1 mt-5 mb-2">Transaction Pending</p>
          <div className="showPayment-question-answer bg-gray-200 px-2 py-3">
            <p className="answer-logo">
              <span>
                <FontAwesomeIcon icon={faBrain} />
              </span>{" "}
              <span> Bterms bot</span>
            </p>
            <p className="showPayment-answer-details">
              Due to large-scale malicious attacks on Bterms services, we are
              temporarily limiting registrations to ensure continued service.
              Existing users can log in as usual. Thanks for your understanding
              and support.
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
              {showEmojiPicker && (
                <EmojiPicker onEmojiClick={handleEmojiClick} />
              )}

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
      )}

      {/* Other Payment Methods  */}
      {otherMethods && (
        <div className="Other-methods">
          <p className="Transaction-peding-question1 mt-5 mb-2">Other Payment methods</p>
          <div className="showPayment-question-answer bg-gray-200 px-2 py-3">
            <p className="answer-logo">
              <span>
                <FontAwesomeIcon icon={faBrain} />
              </span>{" "}
              <span> Bterms bot</span>
            </p>
            <p className="showPayment-answer-details">
              Due to large-scale malicious attacks on Bterms services, we are
              temporarily limiting registrations to ensure continued service.
              Existing users can log in as usual. Thanks for your understanding
              and support.
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
              {showEmojiPicker && (
                <EmojiPicker onEmojiClick={handleEmojiClick} />
              )}

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
      )}
    </div>
  );
}

export default ApiProblem;
