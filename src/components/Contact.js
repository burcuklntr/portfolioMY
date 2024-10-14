import React from "react";

const Contact = () => {
  const customStyle = {
    backgroundColor: "#121212", // Arka plan rengi
    color: "#FFFFFF", // Metin rengi
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={customStyle}
    >
      {/* Contact Section Başlığı */}
      <h2 className="text-4xl font-semibold text-white text-center py-8">Contact Us</h2>

      {/* Contact Bilgileri */}
      <div className="py-8 flex-grow flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
          <ul className="space-y-4 text-gray-300 text-lg">
            <li className="flex items-center justify-center">
              <span className="mr-2 text-indigo-600">📞</span>
              +90 533 287 0226
            </li>
            <li className="flex items-center justify-center">
              <span className="mr-2 text-indigo-600">✉️</span>
              mkalantar01@gmail.com
            </li>
            <li className="flex items-center justify-center">
              <span className="mr-2 text-indigo-600">📍</span>
              Turkey
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
