/* eslint-disable react/prop-types */
import { cardImgURL } from "../utils/constant"


const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className="w-56 mx-2">
        <img src={cardImgURL+posterPath} className="w-full h-full object-cover rounded-lg cursor-pointer"  alt="card-img" />
    </div>
  )
}

export default MovieCard