// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FaBrain, FaTimes, FaArrowRight } from "react-icons/fa";

import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import { faHome, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsLeftRight } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faBrain } from "@fortawesome/free-solid-svg-icons";

import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

// import components
import CannotSignup from "./SuggestedQuestion/CannotSignup";
import ChatProblem from "./SuggestedQuestion/ChatProblem";
import ApiProblem from "../Components/SuggestedQuestion/ApiProblem";
import PaymentBilling from "../Components/SuggestedQuestion/PaymentBilling";
import ResetPassword from "../Components/SuggestedQuestion/ResetPassword";
import SomethingElse from "../Components/SuggestedQuestion/SomethingElse";
import ReportBugs from "../Components/SuggestedQuestion/ReportBugs"

// eslint-disable-next-line react/prop-types
function Contactus({ sendDataToParent }) {
  const [isHome, setIsHome] = useState(true);
  const [isMessage, setIsMessage] = useState(false);
  const [isOpenSuggestedmsg, setSuggestedMsg] = useState(false);
  const [showHomeBtn, setShowHomebtn] = useState(true);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [showAllQuestion, setShowAllQuestion] = useState(true);
  const [  isOpenLargeContainer , setIsLargeContainer ] = useState(false);

  const sendData = () => {
    sendDataToParent(false);
  };

  // open the suggested message modal
  const ShowSuggestedMessage = () => {
    setShowHomebtn(false);
    setIsMessage(false);
    setSuggestedMsg(true);
  };

  // open the home modal
  const OpenHomeModal = () => {
    setIsMessage(false);
    setIsHome(true);
  };
  // Open the Message modal
  const OpenMessageModal = () => {
    setIsHome(false);
    setIsMessage(true);
  };

  //   Suggested Message Controller
  const SuggestedMsgControler = (value) => {
    switch (value) {
      case "A":
        return (
          <>
            {setShowAllQuestion(false)}
            <CannotSignup />
          </>
        );
      case "B":
        return <>
          {
            setShowAllQuestion(false)
          }
          <ChatProblem />

        </>;
      case "C":
        return <>
          {
            setShowAllQuestion(false)
          }
          <ApiProblem />


        </>;
      case "D":
        return <>
        {
          setShowAllQuestion(false)
        }
        <ReportBugs />
        </>;
      case "E":
        return <>
        {
          setShowAllQuestion(false)
        }
         <ResetPassword />
        
        </>;
      case "F":
        return <>
        {
          setShowAllQuestion(false)
        }
        <SomethingElse />
        
        </>;
      case "G":
        return <>
        {
          setShowAllQuestion(false)
        }
        <PaymentBilling />
        </>;
      default:
        return null;
    }
  };



  const SuggestedMsgBtnBack = () => {
    setSuggestedMsg(false)
    setShowHomebtn(true)
    setIsMessage(true)

  }

  const ShowModalQuestion = ()=>{
    setIsMessage(false)
    setShowHomebtn(false)
    setIsHome(false)
    setSuggestedMsg(true)
  }


  // make the contact container large 
  const ContactLargeController = ()=>{
      setIsLargeContainer(true)
  }

  return (
    <div className="Contact-container">
      {/* Home Button coding is here  */}
      {isHome && (
        <div className="home">
          <div className="contact-logo">
            <div className="contact-title">
              <span>
                <FaBrain className="logo-icon" />
              </span>
              <h1 className="ps-3">Bterms</h1>
            </div>
            <button className="close-btn" id="close-contact" onClick={sendData}>
              <FaTimes />
            </button>
          </div>
          <div className="hi-title">
            <h1 id="hi">
              <span>HI</span> 👋
            </h1>
            <h1 id="hi-question">How can we help?</h1>
          </div>
          <div className="card">
            <p className="card-recent">Recent message</p>
            <div className="card-body">
              <div className="card-first">
                <h1>B</h1>
              </div>
              <div className="card-second">
                <p className="card-message">
                  You recently searched for this on Bterm AI technology, ranking
                  among the top in the world.
                </p>
                <p className="text-muted">Bterms · 29m ago</p>
              </div>
              <div className="card-third">
                <FaArrowRight className="arrow-icon" />
              </div>
            </div>
          </div>

          {/* coding for second card  */}
          <div className="second-card">
            <ul>
              <a href="">
                <li className="second-cardItem">
                  <span>Check Bterms service status</span>{" "}
                  <span>
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      size="md"
                      color="black"
                    />
                  </span>
                </li>
              </a>
              <a href="">
                <li className="second-cardItem">
                  <span>Chat with Bterm modal</span>{" "}
                  <span>
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      size="md"
                      color="black"
                    />
                  </span>
                </li>
              </a>
              <a href="">
                <li className="second-cardItem">
                  <span>FAQ</span>
                  <span>
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      size="md"
                      color="black"
                    />
                  </span>
                </li>
              </a>
              <a href="">
                <li className="second-cardItem">
                  <span>Complaints/Suggestions</span>{" "}
                  <span>
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      size="md"
                      color="black"
                    />
                  </span>
                </li>
              </a>
            </ul>
          </div>

          {/* contact support div  */}
          <div className="contact-support">
            <ul>
             
                <li className="support-cardItem" onClick={ShowModalQuestion}>
                  <span>Contact Support</span>
                  <span>
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      size="md"
                      color="black"
                      fontWeight="bold"
                    />
                  </span>
                </li>
              
            </ul>
          </div>
        </div>
      )}

      {/* Message button coding is here  */}
      {isMessage && (
        <div className="message-container">
          <div className="message-title-close">
            <h1 className="message-h1">Messages</h1>
            <button className="message-btn-close" onClick={sendData}>
              <FaTimes />
            </button>
          </div>

          <div className="message-card-container">
            <div className="message-card hover:bg-gray-200">
              <div className="card-body">
                <div className="card-first">
                  <h1>B</h1>
                </div>
                <div className="card-second">
                  <p className="card-message">
                    You recently searched for this on Bterm AI technology,
                    ranking among the top in the world.
                  </p>
                  <p className="text-muted">Bterms · 29m ago</p>
                </div>
                <div className="card-third">
                  <FaArrowRight className="arrow-icon" />
                </div>
              </div>
            </div>
            <div className="message-card hover:bg-gray-200">
              <div className="card-body">
                <div className="card-first">
                  <h1>B</h1>
                </div>
                <div className="card-second">
                  <p className="card-message">
                    You recently searched for this on Bterm AI technology,
                    ranking among the top in the world.
                  </p>
                  <p className="text-muted">Bterms · 29m ago</p>
                </div>
                <div className="card-third">
                  <FaArrowRight className="arrow-icon" />
                </div>
              </div>
            </div>
            <div className="message-card hover:bg-gray-200">
              <div className="card-body">
                <div className="card-first">
                  <h1>B</h1>
                </div>
                <div className="card-second">
                  <p className="card-message">
                    You recently searched for this on Bterm AI technology,
                    ranking among the top in the world.
                  </p>
                  <p className="text-muted">Bterms · 29m ago</p>
                </div>
                <div className="card-third">
                  <FaArrowRight className="arrow-icon" />
                </div>
              </div>
            </div>
            <div className="message-card hover:bg-gray-200">
              <div className="card-body">
                <div className="card-first">
                  <h1>B</h1>
                </div>
                <div className="card-second">
                  <p className="card-message">
                    You recently searched for this on Bterm AI technology,
                    ranking among the top in the world.
                  </p>
                  <p className="text-muted">Bterms · 29m ago</p>
                </div>
                <div className="card-third">
                  <FaArrowRight className="arrow-icon" />
                </div>
              </div>
            </div>

            <div className="message-card hover:bg-gray-200">
              <div className="card-body">
                <div className="card-first">
                  <h1>B</h1>
                </div>
                <div className="card-second">
                  <p className="card-message">
                    You recently searched for this on Bterm AI technology,
                    ranking among the top in the world.
                  </p>
                  <p className="text-muted">Bterms · 29m ago</p>
                </div>
                <div className="card-third">
                  <FaArrowRight className="arrow-icon" />
                </div>
              </div>
            </div>
            <div className="message-card hover:bg-gray-200">
              <div className="card-body">
                <div className="card-first">
                  <h1>B</h1>
                </div>
                <div className="card-second">
                  <p className="card-message">
                    You recently searched for this on Bterm AI technology,
                    ranking among the top in the world.
                  </p>
                  <p className="text-muted">Bterms · 29m ago</p>
                </div>
                <div className="card-third">
                  <FaArrowRight className="arrow-icon" />
                </div>
              </div>
            </div>
            <div className="message-card hover:bg-gray-200">
              <div className="card-body">
                <div className="card-first">
                  <h1>B</h1>
                </div>
                <div className="card-second">
                  <p className="card-message">
                    You recently searched for this on Bterm AI technology,
                    ranking among the top in the world.
                  </p>
                  <p className="text-muted">Bterms · 29m ago</p>
                </div>
                <div className="card-third">
                  <FaArrowRight className="arrow-icon" />
                </div>
              </div>
            </div>
          </div>

          {/* contact support in the message modal  */}
          <div className="message-contact-support hover:bg-gray-600 ">
            <ul>
              <li
                className="message-support-cardItem cursor-pointer"
                onClick={ShowModalQuestion}
              >
                <span>Contact Support</span>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  size="md"
                  color="white"
                  fontWeight="bold"
                />
              </li>
            </ul>
          </div>
        </div>
      )}


      {/* when the user click on the contact support button this suggested message will start  */}
      {isOpenSuggestedmsg && (
        <div className="suggested-msg-container">
          <div className="suggested-title">
            <div className="suggested-first">
              {/* Left Side (Back Button + Text) */}
              <div className="first-left">
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  size="md"
                  color="black"
                  onClick={SuggestedMsgBtnBack}
                  className="suggest-first-btn hover:bg-gray-200 cursor-pointer"
                />
                <h1 className="mx-4">B</h1>
                <h2 className="suggested-first-name">Bterms</h2>
              </div>

              {/* Right Side (Swap & Close Buttons) */}
              <div className="over-large-btn">
                <button >
                  <FontAwesomeIcon
                    icon={faArrowsLeftRight}
                    size="lg"
                    color="red"
                  />
                </button>
                <button className="suggest-btn-close" onClick={sendData}>
                  <FontAwesomeIcon icon={faTimes} size="lg" color="black" />
                </button>
              </div>
            </div>
          </div>
          <div className="suggested-second">
            {/* show the descriptino paragraph  */}
            <div className="suggested-msg-para">
              <p className="suggest-p">
                【NOTE】: This page is only for customer support. If you want to
                chat with the model, please visit https://chat.deepseek.com
              </p>
            </div>
            <div className="first-help-question-card bg-gray-100">
              <div className="help-card-header">
                <FontAwesomeIcon icon={faBrain} size="lg" color="black" />
                <p className="bot-name">Bterms Bot</p>
              </div>
              <p className="help-message">Hi! What can we help with?</p>
            </div>
          </div>

          <div>
            {showAllQuestion && (
              <div className="third-suggested-questions">
                <p
                  className=" "
                  onClick={() =>
                    setSelectedComponent(SuggestedMsgControler("A"))
                  }
                >
                  Cannot sign up
                </p>
                <p
                  className=" "
                  onClick={() =>
                    setSelectedComponent(SuggestedMsgControler("B"))
                  }
                >
                  Problem about Bterms chat
                </p>
                <p
                  className=" "
                  onClick={() =>
                    setSelectedComponent(SuggestedMsgControler("C"))
                  }
                >
                  Problem about Bterms API
                </p>
                <div className="third-sug-row">
                  <p
                    className=""
                    onClick={() =>
                      setSelectedComponent(SuggestedMsgControler("D"))
                    }
                  >
                    Report bugs or issue
                  </p>
                  <p
                    className=""
                    onClick={() =>
                      setSelectedComponent(SuggestedMsgControler("E"))
                    }
                  >
                    Reset password
                  </p>
                </div>
                <div className="third-sug-row">
                  <p
                    className=" "
                    onClick={() =>
                      setSelectedComponent(SuggestedMsgControler("F"))
                    }
                  >
                    Something else
                  </p>
                  <p
                    className=" "
                    onClick={() =>
                      setSelectedComponent(SuggestedMsgControler("G"))
                    }
                  >
                    Payment and billing
                  </p>
                </div>
              </div>
            )}

            {/* Render selected component */}
            <div className="suggested-content">{selectedComponent}</div>
          </div>
        </div>
      )}

      {/* Contact modal buttons  */}
      {showHomeBtn && (
        <div className="contact-buttons">
          <div className="home-btn">
            <button onClick={OpenHomeModal}>
              <FontAwesomeIcon icon={faHome} size="lg" />
              <h1>Home</h1>
            </button>
          </div>
          <div className="message-btn">
            <button onClick={OpenMessageModal}>
              <FontAwesomeIcon icon={faComment} size="lg" />
              <h1>Message</h1>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contactus;
