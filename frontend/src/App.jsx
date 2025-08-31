import React from "react";

const App = () => {
  const sendNotification = async () => {
    const res = await fetch("http://127.0.0.1:8000/notify");
    const data = await res.json();
    alert("Backend responded: " + data.message);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white text-gray-800">
      <h1 className="text-4xl text-black font-bold mb-2">

        <span className="text-blue-800 mr-1.5 relative inline-block">Web Push Notification
           <span className="absolute -bottom-1 left-0 w-full">
              <svg viewBox="0 0 100 10" preserveAspectRatio="none" className="w-full h-2">
                 <path d="M0,10 C30,0 70,0 100,10" stroke="black" strokeWidth="2" fill="none" />
              </svg>
            </span>
          </span>
          Project
      </h1>
      <p className="text-sm mb-6 mt-3 p-2 rounded bg-gray-200">React + FastAPI</p>

      <button
        onClick={sendNotification}
        className="px-6 py-3 bg-black hover:bg-white hover:text-black active:scale-95 rounded text-white text-lg font-medium shadow-md transition-all duration-500"
      >
        Send Notification
      </button>
    </div>
  );
};

export default App;
