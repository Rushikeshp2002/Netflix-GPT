/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";


const VideoBackground = ({ movieId }) => {
    useMovieTrailer({movieId});
    const trailerVid = useSelector(store=>store.movies?.trailerVideos)

 
  return (
    <div className="md:w-full md:aspect-video relative md:-top-24">
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/`+trailerVid?.key+`?muted=0&autoplay=1&loop=1`}
        title="YouTube video player"
        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
