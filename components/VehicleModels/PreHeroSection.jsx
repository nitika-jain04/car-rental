import React from "react";
import Navbar from "../Navbar";

export default function PreHeroSection() {
  const backgroundStyle = {
    backgroundImage: 'url("/car-bg.png")',
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "400px",
    minWidth: "w-full",
    backgroundColor: "rgba(255, 255, 255, 0.5)", // White with 50% opacity
  };

  return (
    <div style={backgroundStyle} className="mb-40 border-red-200 relative">
      <Navbar />
      <div className="mt-20 mb-44 ml-20 text-black relative">
        <h1 className="font-bold text-4xl">Vehicle Models</h1>
        <h4 className="mt-2 font-semibold">Home / Vehicle Models</h4>
      </div>
    </div>
  );
}
