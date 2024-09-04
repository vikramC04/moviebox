import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from './contexts/authContexts';

const POSTER_IMAGE = "https://image.tmdb.org/t/p/w185"


function Movie({movie, display}) {
  const { userLoggedIn } = useAuth()
  if(!display) {
    const poster = POSTER_IMAGE.concat(movie.poster)
    return (
      <div>
          <div className="card">
            <Link to={"/info?".concat(movie.id)}>
            <div className="poster">
              <img src={poster} alt="error"></img>
            </div>
            </Link>
        </div>
          <div className="text-box">
            <h3>{movie.title}</h3>
          </div>
      </div>
    )
  } else {
    const poster = POSTER_IMAGE.concat(movie.poster_path)
    return (
      <div>
        <h1>{movie.title}</h1>
          <div className="card">
            <div className="poster">
              <img src={poster} alt="error"></img>
            </div>
        </div>
        
        
        
          <div className="side-info">
            <div>
              Rating: {movie.vote_average}
            </div>
            <div>
              User Reviews: {movie.vote_count}
            </div>
            {userLoggedIn ? <button className="enter-button">Add To WatchList</button> : ''}
            
            
          </div>
        <div>
          <h1>Synopsis:</h1>
          <div className="desc-mov">
            {movie.overview}
          </div>
        </div>
          
      </div>
    )
    
  }
  
}

export default Movie
