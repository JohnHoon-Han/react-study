
import { useEffect, useState } from "react";
import { useParams }  from "react-router-dom";

function Detail() {
  const [movieInfo, setMovieInfo] = useState(null);

  const {id} = useParams();
  console.log("movie ID ", id);
  const getMovie = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    console.log("getMovie json", json);
    setMovieInfo(json.data.movie)
  }
  useEffect(() => {
    getMovie();
  }, [])
  return movieInfo ? (
    <div>
      <div>
        <h2>{movieInfo.title}</h2>
        <img src={movieInfo.background_image} />
        <div>Download_count: {movieInfo.download_count}</div>
        <div></div>
        <div>{movieInfo.description_intro}</div>
      </div>
    </div>)
    : null;
}

export default Detail;
