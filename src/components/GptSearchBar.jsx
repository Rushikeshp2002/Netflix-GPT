import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addGptMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  // TMDB movie search api
  const searchTMDBMovie = async(movie)=>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS)
    const json = await data.json();
    return json.results;
  }


  const handleGPTSearchClick = async () => {
   

    const gptquery =
      "Act as a movie recommendation system and suggest some movies for the query" +
      searchText.current.value +
      "only give me name of five movies ,comma separated like the example result given ahead.Example result: Gadar 2, Don , Jawan, Hi nanna,The batman";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptquery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices)
      return (
        <div className="w-1/2 bg-slate-900 text-white text-2xl p-4">
          Hey peep, looks like the Open AI api limit is exceeded
        </div>
      );
    
    const gptMovies = gptResults.choices?.[0]?.message.content.split(",");


    const promiseArray =  gptMovies.map((movie)=>searchTMDBMovie(movie));
    
    const tmdbResults = await Promise.all(promiseArray);
    
    dispatch(addGptMovies({movieNames:gptMovies,movieResults:tmdbResults}));
    
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12 "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="col-span-9 p-2 m-4"
          type="text"
          placeholder="What do you want to Search"
        />
        <button
          className="col-span-3 py-2 px-4 bg-red-700 m-4 text-white rounded-lg"
          onClick={handleGPTSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
