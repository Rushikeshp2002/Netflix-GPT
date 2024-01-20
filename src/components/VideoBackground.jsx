/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";


const VideoBackground = ({ movieId }) => {
    useMovieTrailer({movieId});
    const trailerVid = useSelector(store=>store.movies?.trailerVideos)

 
  return (
    <div className="w-full aspect-video relative -top-24">
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/`+trailerVid?.key+`?&autoplay=1&loop=1&showinfo=0`}
        title="YouTube video player"
        
        autoPlay="1"
        // clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
