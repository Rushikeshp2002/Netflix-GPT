import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideos } from "../utils/movieSlice";
import { useEffect } from "react";


const useMovieTrailer = ({movieId}) => {
    const dispatch = useDispatch();

    // const trailerVideos = useSelector(
    //   (store) => store.movie.trailerVideos
    // );


    const getMovieBackground = async () => {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          API_OPTIONS
        );
        const json = await data.json();
     
    
        const filterData = json.results.filter(
          (videos) => videos.type === "Trailer"
        );
        const trailer = filterData[0];
        dispatch(addTrailerVideos(trailer))
       
      };
    
      useEffect(() => {
         getMovieBackground();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
}

export default useMovieTrailer