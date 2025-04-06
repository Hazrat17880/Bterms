// eslint-disable-next-line no-unused-vars
import React from 'react';

function First() {
  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center"
        // style={{ backgroundImage: "url('/firstpage.jpg')" }}
      >
        <nav
          className="p-4 shadow"
          // style={{ backgroundColor: "#2E4053" }} /* Navy Blue */
        >
          <div className="container mx-auto flex items-center justify-between">
            {/* Logo and Title */}
            <div className="flex items-center">
              <span className="font-bold text-[20px] ">Bterms</span>
            </div>
            {/* Single Link */}
            <a
              href="/about"
              className=" hover:text-gray-300 transition-colors duration-200"
            >
              API Platforms
            </a>
          </div>
        </nav>
        <div className="container mx-auto p-8">
          {/* Announcement Section */}
          <section className="mb-2 mt-3">
            <div
              className="rounded p-4 text-center"
              // style={{ backgroundColor: "#F7F7F7" }} /* Light Gray */
            >
              <a
                href="#"
                className="text-gray-400 font-semibold text-lg opacity-80"
              >
                🎉 DeepSeek-R1 is now live and open source, rivaling OpenAI's Model o1. Available on web, app, and API. Click for details.
              </a>
            </div>
          </section>

          <div className="mt-[50px] md:mt-[90px]">
            {/* Header Section */}
            <header className="mb-8 text-center">
              <h1 className="text-4xl font-bold my-3">Bterms Ai</h1>
              <h2 className="text-2xl text-gray-400">Into the Unknown</h2>
            </header>

            {/* Cards Section */}
            <section className="flex flex-col md:flex-row justify-center items-center space-y-5 md:space-x-5 md:space-y-0 mt-16">
              <a href="/login" className="px-5 rounded-md">
                <div className="card bg-white w-full max-w-sm md:w-80 shadow-xl rounded-md border hover:border-blue-600 p-4">
                  <div className="card-body p-4">
                    <div className="card-actions justify-end">
                      <h2 className="text-xl font-bold text-blue-800">Start Now</h2>
                    </div>
                    <p className="text-gray-700 text-sm">
                      Free access to Bterms.Ai <br />
                      Experience the intelligent model
                    </p>
                  </div>
                </div>
              </a>

              <a href="#" className="px-5 rounded-md">
                <div className="card bg-white w-full max-w-sm md:w-80 shadow-xl rounded-md border hover:border-blue-600 p-4">
                  <div className="card-body p-4">
                    <div className="card-actions justify-end">
                      <h2 className="text-xl font-bold text-blue-800">Get BtermsAi App</h2>
                    </div>
                    <p className="text-gray-700 text-sm">
                      Chat on the go with BtermsAi.01 <br />
                      Your free all-in-one AI model
                    </p>
                  </div>
                </div>
              </a>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default First;
