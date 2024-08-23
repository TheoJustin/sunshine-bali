import React from "react";

const People = ({ name, username, profileUrl, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
      <img
        src={profileUrl}
        alt={`${name}'s profile`}
        className="w-24 h-24 rounded-full object-cover mb-4"
      />
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-500">@{username}</p>
      <p className="text-gray-700 text-center mt-2">{description}</p>
    </div>
  );
};

export default People;
