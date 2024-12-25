"use client";

import { useState, useEffect } from "react";

export default function About() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://res.cloudinary.com/dgsdbvs53/image/upload/v1734699062/WhatsApp_Image_2024-12-20_at_17.43.33_c631bf23_q2s9hl.jpg",
    "https://res.cloudinary.com/dgsdbvs53/image/upload/v1734618942/WhatsApp_Image_2024-12-19_at_19.33.56_dc0560f2_utxkjq.jpg",
    "https://res.cloudinary.com/dgsdbvs53/image/upload/v1734592053/WhatsApp_Image_2024-12-19_at_12.07.12_972f5ff0_fsktpw.jpg",
    "https://res.cloudinary.com/dgsdbvs53/image/upload/v1734461204/1_dzq3zw.jpg",
    "https://res.cloudinary.com/dgsdbvs53/image/upload/v1734591195/WhatsApp_Image_2024-12-19_at_11.48.47_423e05e9_yqkowq.jpg",
    "https://res.cloudinary.com/dgsdbvs53/image/upload/v1734592465/WhatsApp_Image_2024-12-19_at_12.10.59_4ba61cf0_v5vsud.jpg",
    "https://res.cloudinary.com/dgsdbvs53/image/upload/v1734591181/WhatsApp_Image_2024-12-19_at_11.50.51_8205edde_hfocff.jpg",
    "https://res.cloudinary.com/dgsdbvs53/image/upload/v1734699276/WhatsApp_Image_2024-12-20_at_17.43.24_f1791e77_r62avz.jpg",
    "https://res.cloudinary.com/dgsdbvs53/image/upload/v1734618967/WhatsApp_Image_2024-12-19_at_19.14.28_83842389_yaaea2.jpg",
    "https://res.cloudinary.com/dgsdbvs53/image/upload/v1734699266/WhatsApp_Image_2024-12-20_at_17.43.28_58e812fc_upq0lb.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000); // 2 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="p-6 bg-gradient-to-r from-gray-100 to-gray-200 min-h-screen">
      {/* About Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-purple-700 mb-4">About Our Shop</h1>
      </div>

      <div className="text-gray-800 text-lg leading-relaxed mb-8 max-w-4xl mx-auto">
        Welcome to our online shop, your one-stop destination for all your needs. In our women section, 
        you will find a wide range of items, including body spray, perfume, jewelry, makeup, and many more 
        products designed to enhance your beauty and style. For men, we offer an extensive collection of 
        perfumes, body sprays, bracelets, rings, and body essentials that cater to every taste and preference. 
        Our kids section is filled with exciting options, from lotions and toys to all kinds of kid essentials, 
        ensuring your little ones have everything they need. At our shop, we aim to provide high-quality items 
        for everyone, bringing convenience and variety together under one roof.
      </div>

      {/* Image Carousel */}
      <div className="relative w-full max-w-full h-auto overflow-hidden rounded-lg mb-10 shadow-lg">
        <img
          src={images[currentImage]}
          alt="Shop Category"
          className="w-full h-auto object-contain transition-transform duration-1000 ease-in-out"
        />
      </div>

      {/* Comment Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Leave a Comment</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <textarea
            placeholder="Your Comment"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            rows={4}
          ></textarea>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}