import { bgImg } from "../utils/constant"
import GptSearchBar from "./GptSearchBar"
import GptMovieSuggestion from "./gptMovieSuggestion"


const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-20 ">
        <img
          src={bgImg}
          alt="bg"
          className="bg-gradient-to-t from-black"
        />
      </div>
      <div className="absolute  md:w-full md:h-screen bg-black drop-shadow-lg opacity-30 backdrop-blur-2xl -z-10"></div>
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch