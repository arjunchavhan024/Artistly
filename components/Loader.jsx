// src/components/Loader.tsx
import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FEFFF4]">
      <div className="flex space-x-2">
        <div
          className="w-4 h-4 bg-blue-500 animate-bounce rounded-sm"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="w-4 h-4 bg-blue-500 animate-bounce rounded-sm"
          style={{ animationDelay: "0.1s" }}
        ></div>
        <div
          className="w-4 h-4 bg-blue-500 animate-bounce rounded-sm"
          style={{ animationDelay: "0.2s" }}
        ></div>
        <div
          className="w-4 h-4 bg-blue-500 animate-bounce rounded-sm"
          style={{ animationDelay: "0.3s" }}
        ></div>
        <div
          className="w-4 h-4 bg-blue-500 animate-bounce rounded-sm"
          style={{ animationDelay: "0.4s" }}
        ></div>
      </div>
    </div>
  );
};

export default Loader;
