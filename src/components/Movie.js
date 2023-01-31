import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title }) {
  return (
    <Link
      to={`${process.env.PUBLIC_URL}/movie/${id}`}
      style={{ textDecoration: "none", marginTop: "40px" }}
    >
      <div className={styles.movie}>
        <img src={coverImg} alt={title} className={styles.movie_cover} />
        <h2 className={styles.movie_title}>{title}</h2>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Movie;
