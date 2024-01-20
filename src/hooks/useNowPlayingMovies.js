import { useDispatch} from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";


const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    // const nowPlayingMovies = useSelector(
    //   (store) => store.movie.nowPlayingMovies);
  

    const generateMovies =async()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results)); 
      
    }
  
    useEffect(()=>{
      generateMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
}

export default useNowPlayingMovies;