import { useState, useEffect } from "react";
import "../CSS/MainComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faMicrophone,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";
import { db } from "../Components/Firebase";

// Firebase configuration
import { collection, getDocs, addDoc} from "firebase/firestore";

function MainComponent() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [conversation, setConversation] = useState([]);
  const [errorMessage, setErrorMessage] = useState(""); // Error message state

  // Fetch data from Firestore
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "your-collection")); // Replace with your actual collection name
        const fetchedData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(fetchedData);
      } catch (error) {
        console.error("Error getting documents: ", error);
      }
    };

    fetchData();
  }, []);

  // Handle search input
  const handleInputChange = (e) => {
    const userInput = e.target.value;
    setSearchTerm(userInput);

    if (userInput.length > 0) {
      const filtered = data
        .map((item) => item?.term?.name)
        .filter((name) =>
          name?.toLowerCase().includes(userInput.toLowerCase())
        );

      setFilteredSuggestions(filtered);

      // Show error message if no matches are found
      setErrorMessage(
        filtered.length === 0 ? "No results found. Please try again." : ""
      );
    } else {
      setFilteredSuggestions([]);
      setErrorMessage(""); // Clear error when input is empty
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = async (suggestion) => {
    console.log("Selected Suggestion:", suggestion); // Log clicked suggestion

    // sending data to the firebase with user id

    try {
      const userId = localStorage.getItem("user");
      const parsedUserId = JSON.parse(userId); 
      console.log("Your user from localStorage: ", parsedUserId.UserId
      );
      const chatId = parsedUserId.UserId;

      const docRef = await addDoc(collection(db, "User-history"), {
        chatId,
        suggestion,
        
        createdAt: new Date(), 
      });
      console.log("your data has been added",docRef);
    } catch (error) {
      console.log(error);
    }

    setSearchTerm("");
    setFilteredSuggestions([]);
    setErrorMessage(""); // Clear error message when selecting a suggestion

    const selectedTerm = data.find((item) => item?.term?.name === suggestion);
    if (!selectedTerm) return;

    setConversation((prev) => [
      ...prev,
      { type: "question", text: suggestion },
      { type: "answer", content: selectedTerm.term },
    ]);
  };

  return (
    <div className="chat-container">
      {/* Conversation Section */}
      <div className="chat-history">
        {conversation.map((chat, index) => (
          <div key={index} className={`chat-message ${chat.type}`}>
            {chat.type === "answer" ? (
              <div className="term-container">
                {/* Display all sections for the term */}
                <h2>{chat.content.name}</h2>

                <h3>Definition</h3> 
                <p>
                  <strong>Technical:</strong>{" "}
                  {chat.content.definition?.technical}
                </p>
                <p>
                  <strong>Layman:</strong> {chat.content.definition?.layman}
                </p>

                <h3>Context & Usage</h3>
                <p>
                  <strong>Area:</strong> {chat.content.context_usage?.area}
                </p>
                <p>
                  <strong>Usage:</strong> {chat.content.context_usage?.usage}
                </p>

                <h3>Examples & Applications</h3>
                <p>
                  <strong>Example:</strong>{" "}
                  {chat.content.examples_applications?.example}
                </p>
                <p>
                  <strong>Case Study:</strong>{" "}
                  {chat.content.examples_applications?.case_study}
                </p>

                <h3>Related Terms & Concepts</h3>
                <p>
                  <strong>Synonyms:</strong>{" "}
                  {chat.content.related_terms_concepts?.synonyms}
                </p>
                <p>
                  <strong>Related:</strong>{" "}
                  {chat.content.related_terms_concepts?.related}
                </p>

                <h3>Mathematical & Analytical Aspects</h3>
                <p>
                  <strong>Calculation:</strong>{" "}
                  {chat.content.mathematical_analytical_aspects?.calculation}
                </p>
                <p>
                  <strong>Formula:</strong>{" "}
                  {chat.content.mathematical_analytical_aspects?.formula}
                </p>

                <h3>Legal & Ethical Considerations</h3>
                <p>
                  <strong>Implications:</strong>{" "}
                  {chat.content.legal_ethical_considerations?.implications}
                </p>

                <h3>Common Misconceptions & Mistakes</h3>
                <p>
                  <strong>Misconception:</strong>{" "}
                  {chat.content.common_misconceptions_mistakes?.misconception}
                </p>
                <p>
                  <strong>Mistake:</strong>{" "}
                  {chat.content.common_misconceptions_mistakes?.mistake}
                </p>

                <h3>Practical Applications</h3>
                <p>
                  <strong>Application:</strong>{" "}
                  {chat.content.practical_application?.application}
                </p>
                <p>
                  <strong>Exercise:</strong>{" "}
                  {chat.content.practical_application?.exercise}
                </p>
              </div>
            ) : (
              <p className="text-red-500">{chat.text}</p>
            )}
          </div>
        ))}

        {/* Input Section goes here */}
        <div className="input-container">
          <div className="input-field-div">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input
              type="text"
              placeholder="Search or Ask..."
              value={searchTerm}
              onChange={handleInputChange}
            />
            <div className="icon-container">
              <FontAwesomeIcon icon={faMicrophone} />
              <FontAwesomeIcon icon={faCamera} />
            </div>
          </div>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          {filteredSuggestions.length > 0 && (
            <ul className="suggestions-list">
              {filteredSuggestions.map((suggestion, index) => (
                <li
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  <div>{suggestion}</div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
