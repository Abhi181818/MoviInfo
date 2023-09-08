import React from "react";
import './custom.css';
import { Link } from "react-router-dom";
const MovieItem = (props) => {
    let { title, image_url, release_date, vote_average, m_id } = props;
    return (
        <div className="my-3">
            <div className="card" style={{ height: '730px' }} >
                <Link to={`/id/${m_id}`} > <img id="movie_image" src={!image_url ? image_url : `https://image.tmdb.org/t/p/original/${image_url}`} className="card-img-top" alt={title} height="660" />
                </Link>
                <span className="position-absolute top-0  translate-middle-y badge rounded-pill bg-danger" style={{ height: "40px", width: '60px', zIndex: "-1", alignItems: "center" }}>
                    <h6>{vote_average}</h6>
                </span>

                <div className="card-body">
                    <h5 className="card-title text-center" id="title">{title}</h5>
                    <h5 className="card-title text-center text-muted" id="release_date">{release_date}</h5>
                </div>
            </div>
        </div>
    )
}
export default MovieItem;