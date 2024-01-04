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
  };

  return (
    <div style={backgroundStyle} className="mb-40 border-red-200">
      <Navbar />
      <div className="mt-20 mb-44 ml-20 text-black">
        <h1 className="font-bold text-4xl">Testimonials</h1>
        <h4 className="mt-2 font-semibold">Home / Testimonials</h4>
      </div>
    </div>
  );
}
