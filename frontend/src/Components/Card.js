import React from "react";

const Card = ({ title, value, icon }) => {
  return (
    <div className="bg-gradient-to-r from-[#FF512F] to-[#F09819] p-6 rounded-lg shadow-md text-white">
      <div className="flex items-center space-x-4">
        <i className={`fa-solid ${icon} text-3xl`}></i>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
