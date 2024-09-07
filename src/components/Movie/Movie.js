import React from 'react'
import { Link } from 'react-router-dom';


const POSTER_IMAGE = "https://image.tmdb.org/t/p/w185"


function Movie({id, poster, title}) {
  
    const image = POSTER_IMAGE.concat(poster)
    return (
      <div className="card-holder">
          <div className="card">
            <Link to={"/info?".concat(id)}>
            <div className="poster">
              <img src={image} alt="error"></img>
            </div>
            </Link>
        </div>
          <div className="text-box">
            <h3>{title}</h3>
          </div>
      </div>
    )
}

export default Movie
