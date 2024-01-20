import { useSelector } from "react-redux";
import MoviesList from "./MovieList";

const GptMovieSuggestion = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames) return null;
  return (
    <div className="p-2 m-3 bg-black bg-opacity-70">
      {movieNames.map((movieNames, index) => (
        <MoviesList
          key={movieNames}
          title={movieNames}
          movies={movieResults[index]}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestion;
