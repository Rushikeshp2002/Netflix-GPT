/* eslint-disable react/prop-types */
import { FaPlay } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";

const VideoTitle = ({title,overview}) => {
    return (
        <div className="pt-[22%] px-12 absolute w-full h-[100%] bg-gradient-to-tr from-black z-10">
            <h1 className="font-bold text-4xl text-white pt-20">{title}</h1>
            <p className="w-3/4 text-white">{overview}</p>
            <div className="flex mt-4">
                <button className="flex font-semibold  items-center px-6 py-3 bg-white rounded-md "><FaPlay size="1.3rem" className="mx-2"/>Play</button>
                <button className="flex font-semibold items-center px-6 py-3 bg-gray-600 bg-opacity-80 text-white rounded-md ml-3"><FiInfo size="1.3rem" className="mx-2"/>More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle