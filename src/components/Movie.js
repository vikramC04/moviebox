import React from 'react'

const POSTER_IMAGE = "https://image.tmdb.org/t/p/w185"
function Movie({movie}) {
    const a = POSTER_IMAGE.concat(movie.poster)
  return (
    <div>
        <img src={a}></img>
      <h2>
        {movie.title}
      </h2>
    </div>
  )
}

export default Movie
