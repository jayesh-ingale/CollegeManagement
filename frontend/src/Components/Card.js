import React from "react";

const Card = ({ title, value, icon, quote, profileImg }) => {
  return (
    <div className="relative bg-gradient-to-r from-[#FF512F] to-[#F09819] p-6 rounded-lg shadow-lg text-white transition-transform transform hover:scale-105 hover:shadow-xl">
      <div className="flex items-center space-x-4">
        {/* Profile Image (Only if provided) */}
        {profileImg && (
          <img
            src={profileImg}
            alt="Profile"
            className="w-12 h-12 rounded-full border-2 border-white"
          />
        )}
        
        {/* Icon and Info */}
        <i className={`fa-solid ${icon} text-4xl`}></i>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </div>

      {/* 🔥 Motivational Quote Section */}
      {quote && (
        <p className="mt-4 italic text-sm text-white opacity-80 border-l-4 border-white pl-3">
          "{quote}"
        </p>
      )}
    </div>
  );
};

export default Card;
