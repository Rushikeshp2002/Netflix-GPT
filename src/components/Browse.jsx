import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useSeriesTrending from "../hooks/useSeriesTrending";
import useTopRated from "../hooks/useTopRated";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useSeriesTrending();

  const gpt = useSelector((store) => store.gpt.showGptSearch);
  

  return (
    <div>
      <Header />
      {gpt ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
