import React from "react";

const VideoDetails = ({ title, overview, release, rating }) => {
  let date = new Date(release);
  return (
    <div className="w-screen absolute top-0 left-0 flex items-center aspect-video pb-28 z-30 text-white bg-gradient-to-t from-black">
      <div className="ml-4 md:ml-8 lg:ml-12 mt-24 md:mt-12 lg:mt-4 text-white">
        <div className="flex place-items-center gap-3 mb-2 md:mb-6 lg:mb-10 text-white">
          <div className=" bg-yellow-500 px-2 inline-block rounded-sm">
            <p className=" text-[12px]">{rating}+</p>
          </div>
          <p> | {date.getFullYear()}</p>
        </div>
        <p className="font-bold text-2xl md:text-[62px] lg:text-[82px] mb-2 md:mb-6 lg:mb-10">{title}</p>
        <p className="hidden md:block md:text-md lg:text-lg w-6/12 mb-8">{overview}</p>
        <button className="px-3 py-1 md:px-6 md:py-2 text-sm md:text-lg  text-black bg-white mr-3 rounded-md font-semibold hover:bg-opacity-70">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 inline mr-2 pb-1"
          >
            <path
              fillRule="evenodd"
              d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
              clipRule="evenodd"
            />
          </svg>
          Play
        </button>
        <button className="px-3 py-1 md:px-6 md:py-2 text-sm md:text-lg bg-gray-500 bg-opacity-70 text-white mr-3 rounded-md hover:bg-opacity-40">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 pb-1 inline mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoDetails;
