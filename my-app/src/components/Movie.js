import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Moive({id, imgSrc, title, summary, genres}) {
  return (
    <div id={id}>
      <img src={imgSrc} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul> 
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  )

}

Moive.propTypes = {
  id: PropTypes.number.isRequired,
  imgSrc: PropTypes.string.isRequired, 
  title: PropTypes.string.isRequired, 
  summary: PropTypes.string.isRequired, 
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Moive;