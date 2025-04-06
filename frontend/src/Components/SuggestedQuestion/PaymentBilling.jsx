import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import "../../CSS/PaymentBilling.css";
import { useState } from "react";
import { FaArrowUp, FaSmile } from "react-icons/fa";
import EmojiPicker from "emoji-picker-react"; // Import Emoji Picker
import { faGift, faFileUpload } from "@fortawesome/free-solid-svg-icons";

function PaymentBilling() {
  const [inputText, setInputText] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showGift, setShowGift] = useState(false); // State for gift section
  const [selectedFile, setSelectedFile] = useState(null);

  const [cannotPay, setCannotPay] = useState(false);
  const [transactionPending, setTransactionPending] = useState(false);
  const [otherMethods, setOtherMethods] = useState(false);
  const [sub1, setSub1] = useState(true);
  const [sub2, setSub2] = useState(true);
  const [sub3, setSub3] = useState(true);

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
    <div className="Paymentandbilling mt-[110px]">
     

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
            on PayPal workflow and we can hardly accelerate. Thank you for your
            patience. What type of billing help do you need?
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

      {/* cannot pay via payapal  */}
      {cannotPay && (
        <div className="ShowPayment">
          <p className="showPayment-question1 mt-5">
            Can not pay via Paypal or Alipay
          </p>
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
          <p className="Transaction-peding-question1 mt-5 mb-2">
            Other Payment methods
          </p>
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

export default PaymentBilling;
