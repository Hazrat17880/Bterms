import React, { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa"; // Font Awesome Icons
import { MdPhoneIphone , } from "react-icons/md"; // Material Design mobile icon

import NewChat from "../Components/NewChat";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Home");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (selectedCategory) {
      case "Home":
        return <NewChat />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`w-64 bg-cyan-100 bg-opacity-10 flex flex-col fixed inset-y-0 ${
          sidebarOpen ? "block" : "hidden"
        } md:block z-10`}
      >
        <div className="flex justify-between items-center p-4 text-2xl font-bold">
          <span>Bterms</span>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-4 overflow-auto">
          <button className="flex items-center space-x-2 bg-blue-100 text-blue-500 font-bold p-2 rounded-md transition-transform transform hover:bg-blue-200 hover:scale-105 focus:outline-none">
            <FaPlus className="text-xl" />
            <span>New Chat</span>
          </button>
        </nav>

        <div className="p-4">
          <p className="text-lg font-semibold">Today</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <input type="text" className="line-clamp-2" placeholder="" value={"usmna khan momand  khan and their family" } readOnly />
          
          
          </ul>

          <p className="text-lg font-semibold mt-4 lorem university peshawar">7 Days</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            
          </ul>

          {/* Get Mobile App Button */}
          <div className="p-3 mt-4">
            <button className="flex items-center gap-2 bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-xl">
              <MdPhoneIphone className="text-xl" />
              Get Mobile App
              <span className="bg-white text-blue-600 font-bold text-sm px-2 py-1 rounded-md">
                New
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-0 md:ml-16 overflow-auto">
        <div className="bg-white p-6 rounded-lg shadow-md pl-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default Home;
