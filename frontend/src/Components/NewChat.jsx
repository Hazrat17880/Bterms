// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faPaperclip } from "@fortawesome/free-solid-svg-icons";
import "../../src/App.css";

function NewChat() {
  // for auto etc coding
  const textareaRef = useRef(null);
  const handleInput = () => {
    const ta = textareaRef.current;
    if (ta) {
      // Reset the height so that it can shrink if needed, then expand to scrollHeight.
      ta.style.height = "auto";
      ta.style.height = `${ta.scrollHeight}px`;
    }
  };

  // get values
  const [inputValue, setInputValue] = useState("");

  // handle submit function
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("your data is :", inputValue);
    setInputValue("")
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* User Questions Section */}
      <div className="">
        <div className="w-[500px] bg-gray-100 rounded-[20px] p-3  relative top-8 left-[120px] sm:mx-[380px]">
          <p className="text-left ">
           Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="my-8 relative right-0 pl-32 w-[60%]  sm:mx-32 text-gray-700 py-8">
          <h1 className="font-bold">
            Artificial Intelligence (AI) and Machine Learning (ML)
          </h1>
          <p>
            AI and ML are at the forefront of innovation, powering everything
            from natural language processing (e.g., ChatGPT, Bard) to autonomous
            systems, healthcare diagnostics, and personalized recommendations.
            Generative AI tools like DALL·E, MidJourney, and Stable Diffusion
            are revolutionizing creative industries by generating images, music,
            and text. AI is increasingly integrated into business operations for
            automation, data analysis, and decision-making.
          </p>
        </div>
      </div>

      {/* Chat Header */}
      <h1 className="font-bold text-2xl text-gray-800 mb-4">
        Hi, I am Bterms AI
      </h1>
      <p className="text-gray-600 mb-6">How can I help you today?</p>

      {/* --------------------------------------------------------------------------------- */}
      {/* Chat Input Container */}
      <div className="w-full max-w-[70%] overflow-x-visible relative right-0 bg-gray-100 border border-gray-200 rounded-2xl shadow-sm p-4 sticky bottom-2 ml-8">
        <form onSubmit={handleSubmit}>
          <textarea
            ref={textareaRef}
            className="w-full p-3 text-gray-700 bg-gray-100 min-h-[130px] max-h-[300px] rounded-lg focus:outline-none resize-none overflow-y-auto"
            rows={4}
            placeholder="Type your message here..."
            onInput={handleInput}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            aria-label="Message input"
          />

          {/* Radio Button and Icon Section */}
          <div className="flex items-center justify-between space-x-4 relative mt-4 overflow-visible">
            <div>
              {/* Tooltip for Version 01 */}
              <label className="group relative cursor-pointer bg-white border px-2 py-1 hover:bg-gray-300 text-sm rounded-[10px]">
                <input
                  type="radio"
                  name="version"
                  value="option1"
                  className="hidden peer"
                />
                <span className="tooltip tooltip-top">
                  version (01)
                  <span className="tooltiptext">
                    Tooltip text for version (01)
                  </span>
                </span>
              </label>

              {/* Tooltip for Search */}
              <label className="group relative cursor-pointer bg-white border px-2 py-1 hover:bg-gray-300 text-sm rounded-[10px] mt-2">
                <input
                  type="radio"
                  name="version"
                  value="search"
                  className="hidden peer"
                />
                <span className="tooltip tooltip-top peer-checked:font-bold peer-checked:text-blue-600">
                  search
                  <span className="tooltiptext">Tooltip text for search</span>
                </span>
              </label>
            </div>

            {/* Icons Section */}
            <div className="flex items-center justify-center space-x-6">
              {/* Tooltip for Paperclip */}
              <div className="tooltip tooltip-top">
                <FontAwesomeIcon icon={faPaperclip} className="text-blue-500" />
                <span className="tooltiptext w-[230px]">
                  <h2 className="text-left px-1">Text extraction only.</h2>
                  <p className="text-sm text-left px-1">
                    Upload docs or image (max 10MB)
                  </p>
                </span>
              </div>

              {/* Tooltip for Arrow (Submit Button) */}
              <div className="tooltip tooltip-top">
                <button type="submit" onClick={handleSubmit}>
                  <FontAwesomeIcon
                    icon={faArrowUp}
                    className={`p-2 rounded-full text-white mx-2 ${
                      inputValue
                        ? "bg-blue-700 cursor-pointer"
                        : "bg-gray-500 opacity-50 pointer-events-none cursor-not-allowed"
                    }`}
                  />
                </button>
                <span className="tooltiptext overflow-x-visible">
                  {inputValue ? "Submit" : "Please ask"}
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>

      <p className="text-sm py-1 text-gray-400 sticky bottom-0 z-1">
        Bterms can make mistakes. Check important info.
      </p>
    </div>
  );
}

export default NewChat;
