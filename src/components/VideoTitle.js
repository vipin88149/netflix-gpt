import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-36 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-2/5">{overview}</p>
      <div className="flex">
        <button className="bg-white text-black py-4 px-12 text-xl  rounded-lg hover:opacity-80">
          ▶ Play
        </button>
        <button className="mx-2 bg-gray-500 text-white py-4 px-12 text-xl opacity-50 rounded-lg ">
          More Info!
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
