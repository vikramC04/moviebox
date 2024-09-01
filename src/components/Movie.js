import React from 'react'

const POSTER_IMAGE = "https://image.tmdb.org/t/p/w185"
function Movie({movie}) {
  const a = POSTER_IMAGE.concat(movie.poster)
  return (
          <div>
            <div className="card">
            <div className="poster">
                <img src={a} alt="error"></img>
            </div>
          </div>
            <div className="text-box">
              <h3>{movie.title}</h3>
            </div>
          </div>
  )
}

export default Movie
