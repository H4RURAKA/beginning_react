import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  const summary = detail.description_full;

  return (
    <div>
      {loading ? (
        <h1 className={styles.load}>Loading...</h1>
      ) : (
        <div className={styles.main_detail}>
          <div className={styles.cover_and_details}>
            <img
              className={styles.movie_cover}
              src={detail.large_cover_image}
            />
            <div className={styles.details_all}>
              <text className={styles.movie_title}>{detail.title}</text>
              <text className={styles.movie_summary}>{summary}</text>
              <div className={styles.details}>
                <text>Rating : {detail.rating}/10</text>
                <text>Released : {detail.year}</text>
                <text>Likes : {detail.like_count}</text>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
