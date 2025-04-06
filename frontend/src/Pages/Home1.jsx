// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Tooltip } from "react-tooltip";
import SidebarModals from "./SidebarModals";

import {
  FaArrowLeft,
  FaArrowRight,
  FaRegCommentDots,
  FaBars,
} from "react-icons/fa";

import "../App.css";

function Home1() {
  const historyItems = [
    "Lorem ipsum dolor sit amet.",
    "The rapid advancement of technology has transformed the way we live, work, and communicate. From smartphones to artificial intelligence, innovations have made our daily tasks more convenient and efficient. The internet has connected people across the globe, allowing instant access to information and seamless communication. However, as technology continues to evolve, concerns",
    "Another example text for tooltip.",
    "This is a long .",
    "Hover over me to see full text.",
    "Last example for tooltip testing. ast example for tooltip testing ast example for tooltip testing",
  ];

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isClosedSidebar, setIsClosedSidebar] = useState(false); // Fix: consistent naming
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // this will close the sidebar
  const CloseSideBar = () => {
    setIsClosedSidebar(true);
  };

  // Function to close modal when clicking outside
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      setIsOpenModal(false);
    }
  };

  // Toggle Sidebar
  const toggleSidebar = () => {
    setIsSmallScreen(true);
    setIsClosedSidebar(!isClosedSidebar);
  };

  return (
    <div className="home-container">
      {/* for small screen coding is here  */}
      <div className="small-screen">
        <button className="hamburger-btn" onClick={toggleSidebar}>
          <FaBars size={24} />
        </button>
        <button className="comment-btn">
          <FaRegCommentDots size={24} />
        </button>
      </div>
      <div className={`${isClosedSidebar ? "w-20 px-3 mt-5" : "sidebar"}`}>
        <div className="sidebar-title">
          <h1
            className={`${
              isClosedSidebar
                ? `text-md text-blue-1000 cursor-pointer `
                : "text-lg"
            }`}
            onClick={() => setIsClosedSidebar(false)}
          >
            Bterms
          </h1>
          {!isClosedSidebar && (
            <button className="back-btn" onClick={CloseSideBar}>
              <FaArrowLeft data-tooltip-id="close-sidebar" />
              <Tooltip
                id="close-sidebar"
                place="bottom"
                content="Close Sidebar"
              />
            </button>
          )}
        </div>
        {isClosedSidebar && (
          <div>
            <button
              data-tooltip-id="open-sidebar"
              className="text-lg hover:bg-gray-300 p-2 mt-8 rounded-md"
              onClick={() => setIsClosedSidebar(false)}
            >
              <FaArrowRight />
            </button>

            {/* Tooltip */}
            <Tooltip id="open-sidebar" place="right" content="Open Sidebar" />
          </div>
        )}
        {/* new chat icons  */}
        {isClosedSidebar && (
          <div>
            <button
              data-tooltip-id="open-chat"
              className="text-lg hover:bg-gray-300 p-2 mt-8 rounded-md"
            >
              <FaRegCommentDots className="chatIcon" />
            </button>
            <Tooltip id="open-chat" place="right" content="New Chat" />
          </div>
        )}

        {/* New Chat Button */}
        {!isClosedSidebar && (
          <div className="newChat">
            <FaRegCommentDots className="chatIcon" />
            <p>New Chat</p>
          </div>
        )}

        {/* Chat History */}
        {!isClosedSidebar && (
          <div className="history">
            <div className="history-section">
              <p className="history-title">Today</p>
              <ul>
                {historyItems.map((item, index) => {
                  // Limit hover text to 20 words
                  const tooltipText =
                    item.split(" ").slice(0, 20).join(" ") +
                    (item.split(" ").length > 20 ? "..." : "");

                  return (
                    <li
                      key={index}
                      data-tooltip-id={`tooltip-${index}`}
                      className="tooltip-item"
                    >
                      {item.length > 25 ? item.slice(0, 25) + "..." : item}

                      {/* Tooltip Component */}
                      <Tooltip
                        id={`tooltip-${index}`}
                        place="top"
                        effect="solid"
                        positionStrategy="fixed"
                        floating={true} // Ensures the tooltip does not shift position
                      >
                        {tooltipText}
                      </Tooltip>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="history-section">
              <p className="history-title">Last 30 Days</p>
              <ul>
                {historyItems.map((item, index) => {
                  // Limit hover text to 20 words
                  const tooltipText =
                    item.split(" ").slice(0, 20).join(" ") +
                    (item.split(" ").length > 20 ? "..." : "");

                  return (
                    <li key={index} data-tooltip-id={`tooltip-${index}`}>
                      {item.length > 25 ? item.slice(0, 25) + "..." : item}
                      {/* Tooltip Component */}
                      <Tooltip
                        id={`tooltip-${index}`}
                        place="top"
                        effect="solid"
                        positionStrategy="fixed"
                        floating="true"
                      >
                        {tooltipText}
                      </Tooltip>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}

        {/* Get Mobile App & Profile */}
        {isClosedSidebar ? (
          <SidebarModals data={"yes"} />
        ) : (
          <SidebarModals data={""} />
        )}
      </div>

      {/* Modal - Closes on Outside Click */}
      {isOpenModal && <SidebarModals onClick={handleOutsideClick} />}

      {/* Main Content Area */}
      <div className="main-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora porro
        obcaecati hic, doloribus excepturi molestias consequuntur adipisci
        placeat nostrum veniam, cupiditate, aliquid numquam quibusdam! Fugiat
        ipsa libero, nemo hic quidem molestias ducimus est architecto quasi
        placeat! Dignissimos deserunt enim dolorum accusamus! Qui nihil labore
        alias reiciendis, ullam fugiat unde maiores provident, earum ducimus
        modi quae? Nisi voluptates sit quos neque, quis amet at magni debitis
        aliquam recusandae ex necessitatibus voluptate eaque saepe, itaque,
        corporis aut a inventore alias praesentium magnam! Et dicta architecto
        reprehenderit a, sapiente blanditiis minima tempore veritatis tempora,
        dolorum optio iusto nemo ad dolores distinctio explicabo unde
        praesentium rerum error facere in consequuntur. Tempore dolore, sapiente
        itaque a iusto at unde pariatur blanditiis, laudantium quae illum
        nostrum totam recusandae possimus sunt debitis molestiae facere sequi
        neque et magni cupiditate quos id consequuntur. Aliquid quo magnam,
        voluptatum, quos exercitationem rem, nisi perspiciatis necessitatibus
        expedita error eaque. Distinctio saepe asperiores inventore nobis natus
        accusantium laudantium tenetur maiores laborum quis, ratione tempore,
        assumenda debitis alias minus, magnam delectus. Voluptatum nisi
        accusamus veniam molestias laboriosam nesciunt reprehenderit repudiandae
        optio quos, ut odit est facere expedita, dolore omnis saepe sit
        cupiditate quasi animi, dolores sapiente dolorem atque velit laborum!
        Laudantium nemo aperiam aliquid similique recusandae illum suscipit quae
        distinctio fuga voluptatibus, optio beatae veritatis ratione ab,
        perspiciatis praesentium exercitationem deleniti animi quos expedita?
        Officia magnam esse distinctio at, deserunt accusantium blanditiis
        facilis temporibus tempore autem voluptas voluptatibus assumenda
        architecto voluptatum, numquam eaque sequi corporis? Consequuntur enim,
        hic cum aut possimus necessitatibus, quo esse porro iusto nobis at
        facere magni, sint dignissimos numquam eaque! Ducimus, soluta a!
        Accusamus hic nihil repellendus est ratione suscipit quam blanditiis
        maxime obcaecati, optio modi voluptates tempora sapiente officiis
        debitis impedit minus reiciendis temporibus fugiat architecto tenetur
        molestiae quibusdam commodi? Corrupti incidunt maxime possimus natus
        molestias illo magni ipsam temporibus ullam? Alias iusto, voluptate
        quasi error cumque nam molestias in dignissimos tempora deserunt nulla,
        perspiciatis esse voluptates et consectetur culpa debitis optio at
        repellendus. Accusantium quam eum sequi eos perspiciatis dicta similique
        a quaerat amet aut! Odit eius tempore harum recusandae ipsum tenetur
        exercitationem amet magnam assumenda maxime ratione quidem eveniet
        tempora, quo sequi quam ullam dolor pariatur excepturi consequatur
        consequuntur vitae eligendi molestias natus? Consequuntur reprehenderit
        voluptatum vitae animi praesentium doloremque soluta provident delectus
        at, non quaerat ducimus aut deleniti eos similique impedit dolores quis
        voluptate dignissimos vero accusamus assumenda facere nulla. Excepturi
        quo eaque veniam a cumque ullam facere natus debitis tempora temporibus.
        Nemo, nobis? Itaque sint, blanditiis a impedit dignissimos iusto magnam
        adipisci praesentium numquam id, magni, odio quidem laborum nisi fugit
        doloremque. Rem architecto sunt quidem autem minus eius debitis dolorum
        nobis dolorem minima corporis, nisi ut ad temporibus amet libero. Aut
        adipisci ea, est ipsa similique facere molestiae quisquam, in error
        provident a asperiores dolor pariatur, quam animi quibusdam esse labore
        corporis cum delectus iusto eius dolores maiores velit. Nihil veniam
        asperiores officia, eum nobis repudiandae, tempore, aspernatur
        perferendis sed consequatur quas. Eos perferendis dolor doloribus animi,
        quas unde labore ex similique quasi ipsa aliquid cumque sapiente aliquam
        possimus, totam minus odit dolore. Hic harum explicabo repudiandae omnis
        rem voluptatum tenetur dolorum, ipsam nesciunt autem. Accusantium porro
        molestiae sed consequatur, nisi modi corporis quasi quod, odit minus
        iste ipsum dicta commodi saepe recusandae iure provident? Eligendi ea
        praesentium doloribus nihil excepturi ex fuga animi dolor autem, ullam
        esse modi, sequi ipsa soluta consequuntur possimus quos veritatis
        consequatur enim perspiciatis explicabo? Est placeat nihil fugiat
        eligendi repellendus perferendis, in esse laudantium error architecto
        nulla quibusdam ex blanditiis consectetur nobis qui? Odit maiores
        voluptates saepe quis, cum velit corporis aut? Eius esse libero saepe
        harum. Voluptatum corrupti placeat hic aut eaque maxime natus quaerat ad
        quidem culpa ab possimus pariatur debitis rerum, iusto non quo
        perferendis. Eos aperiam enim dicta quod, sit nihil nam rem ratione vel
        pariatur minima sequi quo minus iure recusandae sed ducimus perferendis
        temporibus exercitationem ab expedita obcaecati vitae ipsum quae. Dolore
        sint illum nulla esse. Ipsa, architecto rem dolorem error voluptatibus
        et quo sed inventore minima laborum sequi. Inventore ullam modi autem
        odit rerum eligendi magnam illo hic deleniti odio! Dicta, molestias.
        Distinctio laborum cumque reiciendis enim aut maxime labore quod vel
        iusto officia suscipit error rem fuga dolore culpa cupiditate, delectus
        iste atque at necessitatibus harum dignissimos praesentium sed autem!
        Officiis culpa repellat nisi sunt voluptas beatae ipsum fugiat saepe
        quod voluptate, est et sed aliquid sequi consectetur. Quasi tempora
        voluptate eos excepturi vitae ab sint iusto fugiat, cum id corrupti sed
        et quos aliquid hic error recusandae nihil fugit asperiores nobis quidem
        aut neque dolorum reprehenderit. Laudantium minus fugiat, voluptate quo
        error non libero similique quis accusamus tenetur ut asperiores, ipsum
        officiis veniam adipisci suscipit doloremque praesentium amet voluptatem
        sit illum! Adipisci, quae eius. Deserunt, magni natus illo esse, nisi
        unde rem quisquam doloremque impedit provident fugit modi!
      </div>

      {/* First Modal Coding  */}
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
    </div>
  );
}

export default Home1;
