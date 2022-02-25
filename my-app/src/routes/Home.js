import { useState, useEffect } from "react";
import Movie from "../components/Movie";
function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);


  const getMovies = async () => {
    const response = await(await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)).json();
    console.log(`response.data.movies`, response.data.movies);
    setMovies(response.data.movies);
    setLoading(false);
  }

  useEffect(() => {
    getMovies();
  }, [])
  return <div>
    {loading ? 
      <h1>Loading...</h1> : 
      <div> 
        {movies.map(movie =>(
          <Movie id={movie.id} imgSrc={movie.medium_cover_image} title={movie.title}  genres={movie.genres} summary={movie.summary} />
        ))} 
      </div> };

  </div>;
}

export default Home;
