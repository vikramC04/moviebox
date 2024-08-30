import React from 'react'

function Movie({movie}) {
  return (
    <div>
      <h2>
        {movie.title} {movie.id}
      </h2>
    </div>
  )
}

export default Movie
